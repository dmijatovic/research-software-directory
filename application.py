import flask
import requests
import markdown
import random
import datetime
import json
import plot_commits

app = application = flask.Flask(__name__)

#def json_dumps(json_object):
#    json_dump = flask.json.dumps(json_object,
#                                 sort_keys = True,
#                                 indent = 4,
#                                 seperators = (',', ': '))
#    return json_dump
#app.jinja_env.filters['dump_json'] = json_dumps

@app.route('/', methods = ['GET', 'POST'])
def index():
    url = "http://admin.research-software.nl/api/software"
    all_software_dictionary = requests.get(url).json()
    #template_data_json = flask.json.dumps(all_software_dictionary, sort_keys = True, indent = 4)
    random_integer = random.randint(1,100)
    return flask.render_template('index_template.html', template_data= all_software_dictionary,
                                                        random_integer = str(random_integer))

@app.route('/software/<software_id>')
def software_product_page_template(software_id):
    url = "http://admin.research-software.nl/api/software/%s" % software_id
    software_dictionary = requests.get(url).json()
    description = software_dictionary.get("description")
    descriptionMarkup = flask.Markup(markdown.markdown(description))
    organisation_logos = {"astron":"astron.gif","cbs-knaw":"cbs-knaw.png","commit":"commit.png","cwi":"cwi.png","dans":"dans.jpg","deltares":"deltares.jpe","dtl":"dtl.png","fugro":"fugro.png","geodan":"geodan.gif","huygens":"huygens.png","icl":"icl.jpg","ign":"ign.jpg","jhu":"jhu.png","knir":"knir.png","knmi":"knmi.png","leiden-university":"leiden-university.png","lumc":"lumc.png","meertens":"meertens.png","monetdb":"monetdb.png","nfi":"nfi.gif","nikhef":"nikhef.jpg","nlesc":"nlesc.jpg","ntu":"ntu.gif","oracle":"oracle.png","potree":"potree.png","radboud.university.nijmegen":"radboud.university.nijmegen.png","rijkswaterstaat":"rijkswaterstaat.png","spinlab":"spinlab.jpg","surfsara":"surfsara.png","tno":"tno.jpg","tu-delft":"tu-delft.png","university.of.groningen":"university.of.groningen.png","university.of.southampton":"university.of.southampton.svg","upv":"upv.png","utwente":"utwente.png","uu":"uu.svg","uva":"uva.jpg","vua":"vua.png","wur":"wur.jpg"}
    return flask.render_template('software_template.html', software_id=software_id, template_data=software_dictionary, descriptionMarkup=descriptionMarkup, organisation_logos=organisation_logos)

@app.route('/dynamic/<software_id>/commitsData.js')
def get_commits_data(software_id):
    url = "http://admin.research-software.nl/api/software/%s/report" % software_id
    report_dictionary = requests.get(url).json()
    if 'github' in report_dictionary:
        commits = report_dictionary['github']['commits']
        if isinstance(commits, list):
            commits_data = plot_commits.bin_commits_data(commits)
        else:
            commits_data = commits
    else:
        commits_data = {'error': '%s: %s' % (
            str(report_dictionary['exception']['class']),
            str(report_dictionary['exception']['error'])
            )}
    return "var commitsData = " + str(commits_data)

@app.route('/dynamic/data.js')
def get_data():
    url = "http://admin.research-software.nl/api/software"
    all_software_dictionary = requests.get(url).json()
    template_data_json = flask.json.dumps(all_software_dictionary, sort_keys = True, indent = 4)
    return "var ALL_DATA = "+template_data_json

@app.route('/dynamic/gems.js')
def get_gems():
    url = "http://admin.research-software.nl/api/software"
    all_software_dictionary = requests.get(url).json()
    gems_json = flask.json.dumps(all_software_dictionary[:6], sort_keys = False, indent = 4)
    return "var gems = " + gems_json

@app.template_filter('strftime')
def strftime(millis):
    format = "%Y-%m-%d %H:%M:%S"
    result = datetime.datetime.fromtimestamp(millis / 1e3).strftime(format)
    return result

@app.template_filter('checkcontributor')
def checkcontributor(contributor):
    return [c if isinstance(c, str) else c['name'] for c in contributor]

if __name__ == '__main__':
    app.run(debug=True)
