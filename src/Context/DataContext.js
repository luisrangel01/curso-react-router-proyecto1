import React, { createContext, useState } from "react";

// Exportamos la instancia del objecto Context
export const DataContext = createContext();

const defaultBlogData = [
  {
    title: "Que es React?",
    slug: "que-es-react",
    content: "Es el mejor framework de JS",
    author: "luisrangelc",
  },
  {
    title: "Que es Vue?",
    slug: "que-es-vue",
    content: "Es el framework mas versatil de JS",
    author: "rociorangelp",
  },
  {
    title: "Que es Angular?",
    slug: "que-es-angular",
    content: "Es el framework de JS mas usado por las grandes industrias",
    author: "rodrigorangelc",
  },
];

// Creamos un componente Provider el cual recibe como props los children
const DataProvider = ({ children }) => {
  //En este ejercicio vamos a crear una props darkMode y a su vez la vamos a guardar en el Local Storage ;)
  const [darkMode, setDarkMode] = useState(() => {
    const val = window.localStorage.getItem("darkMode");

    //La razon de este if es porque cuando obtenemos datos del LS, este viene desde un JSON lo cual se parsea como un String
    //Pero para mi caso lo quiero como un boolean
    if (val === "true") return true;
    else return false;
  });

  const [blogData, setBlogData] = useState(() => {
    const items = JSON.parse(localStorage.getItem("blogData"));

    // const val = window.localStorage.getItem("blogData");

    //La razon de este if es porque cuando obtenemos datos del LS, este viene desde un JSON lo cual se parsea como un String
    //Pero para mi caso lo quiero como un boolean
    if (items) return items;
    else {
      localStorage.setItem("blogData", JSON.stringify(defaultBlogData));
      return defaultBlogData;
    }
  });

  //Value es el objeto con los valores y sus respectivas funciones de alteracion de los mismos
  // Piensa que aqui van a estar todas las props que quieres compartir y las funciones para cambiar sus valores
  const value = {
    darkMode,
    activateDarkMode: (value) => {
      setDarkMode(value);
      window.localStorage.setItem("darkMode", value);
    },
    blogData,
    createPost: (post) => {
      // const items = JSON.parse(localStorage.getItem("blogData"));
      const items = [...blogData];

      items.push(post);

      setBlogData(items);
      localStorage.setItem("blogData", JSON.stringify(items));
    },
    readPost: (slug) => {
      return blogData.find((post) => post.slug === slug);
    },
    updatePost: (postToUpdate) => {
      const items = [...blogData];

      const postIndex = items.findIndex(
        (post) => (post.slug === postToUpdate.slug)
      );

      const newData = { ...items[postIndex], ...postToUpdate };
      items[postIndex] = newData;

      setBlogData(items);
      localStorage.setItem("blogData", JSON.stringify(items));
    },
    deletePost: (slug) => {
      const items = blogData.filter((post) => post.slug !== slug);
      setBlogData(items);
      localStorage.setItem("blogData", JSON.stringify(items));
    },
  };
  //Finalmente retornamos el componente Context.Provider y la pasamos como props el value (recuerda, son las props globales que queremos en nuestra app)
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

// Exportamos by defult nuestro componente Provider, pues lo vamos a usar para proveer nuestro Context en la app
export { DataProvider };
