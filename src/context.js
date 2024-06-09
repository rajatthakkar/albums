import { createContext, useContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
export const itemContext = createContext()
function useValue() {
    const value = useContext(itemContext)
    return value
}
// Custome Context
function CustomeIteamContext({ children }) {
    // State Variable
    const [modal, setModal] = useState(false)
    const [data, setData] = useState([])
    const [createModal, setcreateModal] = useState(false)
    const [formData, setFormData] = useState({
        userid: '',
        id: '',
        title: ''
    })
    const [updateId,setupdateId] = useState()
//  Function For Input field
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
        console.log(formData)
    }
    // Function for submit form Data
    const handleSubmit = () => {
        console.log(formData)
        postAlbum()
        setFormData({
            userid: '',
            id: '',
            title: ''
        })
        setcreateModal(!createModal)
        
    }
    console.log(children)
    // Function For Modal pop up 
    const handleCreateModal = () => {
        setcreateModal(!createModal)

    }
    const handleModal = (id) => {
        console.log(id)
        setupdateId(id)
        setModal(!modal)
    }
    // GET API
    const getData = () => {
        //https://jsonplaceholder.typicode.com/albums
        axios
            .get("https://jsonplaceholder.typicode.com/albums")
            .then(data => setData(data.data))
            .catch(error => console.log(error));

    }
    useEffect(() => {
        getData()
    }, [])
// Post API
    const postAlbum = () => {
     
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) =>
                setData(prevData => [...prevData, json]));
    }
    // PUT API
    const updateAlbum = (title) => {
        console.log(updateId)
        fetch(`https://jsonplaceholder.typicode.com/posts/${updateId}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: `${updateId}`,
                title: `${title}`,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) =>
                setData(prevData => [json]));
            setModal(!modal)
    } 
    // DELETE API
    const deleteAlbum=(id)=>{
        console.log(id)
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
          });
          const newData = data.filter(item => item.id !== id);
          console.log(newData)
          setData(newData);
    }
  
    return (
        // Return iteam context
        <itemContext.Provider value={{
            modal, handleModal,
            data, handleCreateModal,
            createModal, handleChange, formData
            , handleSubmit, updateAlbum,deleteAlbum
        }}>
            {children}
        </itemContext.Provider>
    )
}
// export context and useValue hook
export default useValue
export { CustomeIteamContext }