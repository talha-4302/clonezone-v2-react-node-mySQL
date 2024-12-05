import {useRef, useEffect} from 'react';

const Scrollhook =() =>{
    const scrollref = useRef(null);
   
    useEffect(()=>{

        const scrollcontainer = scrollref.current;

        if(scrollcontainer){


            scrollcontainer.addEventListener('wheel', (evt)=>{
                evt.preventDefault();
                scrollcontainer.scrollLeft += evt.deltaY;


            })}

         //cleanup   
        return () =>{
            if(scrollcontainer){
                scrollcontainer.removeEventListener('wheel', (evt)=>{
                    evt.preventDefault();
                    scrollcontainer.scrollLeft += evt.deltaY;
    
    
                })
            }

        };

        




    },[]);

    return scrollref;


};

export default Scrollhook;