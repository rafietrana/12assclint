// set Data into localstroge

export function saveToLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    return "you have get and error ", error;
  }
}



// get Data from localstorage


export function getFromLocalStorage(key){

   try{
   const storedValue = localStorage.getItem(key);
   return storedValue ? JSON.parse(storedValue) : null
   }
   catch(error){
    console.error(error);
    return null;
   }
}


// Remove data from localStorage
export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.error("Error removing from localStorage", err);
  }
};