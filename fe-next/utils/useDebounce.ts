import { useState, useEffect } from 'react';

// export default function useDebounce(delay) {
//   // State and setters for debounced value
//   const [value,setValue] = useState(null)
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(
//     () => {
//       // Update debounced value after delay
//       const handler = setTimeout(() => {
//         setDebouncedValue(value);
//       }, delay);
//       // Cancel the timeout if value changes (also on delay change or unmount)
//       // This is how we prevent debounced value from updating if value is changed ...
//       // .. within the delay period. Timeout gets cleared and restarted.
//       return () => {
//         clearTimeout(handler);
//       };
//     },
//     // Only re-call effect if value or delay changes
//     [value, delay]
//   );

//   return [debouncedValue, setValue];
// }

export default function setDebounce(delay:number){
  let timer = undefined
  return function useDebounce(value:string){
    if (timer){
      console.log("useDebounce.clearTimeout...", timer)
      clearTimeout(timer)
    }
    timer = setTimeout(()=>{
      return value
    },delay)
  }
}