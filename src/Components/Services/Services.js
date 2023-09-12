import React from 'react';
import './Services.css';
import { useState } from 'react';
function Services() {
    const [toggleState, setToggleState] = useState(3    );

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
         
        <>
       

        <div className='container'>
        <div className="my-5">
      <h1 className="text-center font-bold" >Our Services</h1>
    </div>
            <div className='bloc-tabs'>
                <div
                    className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(1)}
                >
                    Web Development
                </div>
                <div
                    className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(2)}
                >
                    App Development
                </div>
                <div
                    className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(3)}
                >
                    Order Development
                </div>
            </div>
            <div className='content-tabs'>
                <div
                    className={toggleState === 1 ? 'content active-content' : 'content'}
                >
                    <div className='left'>
                        
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        labore cumque aperiam sequi laudantium odit illum tenetur porro
                        adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                        molestiae maiores tempore voluptate excepturi possimus exercitationem?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        labore cumque aperiam sequi laudantium odit illum tenetur porro
                        adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                        molestiae maiores tempore voluptate excepturi possimus exercitationem?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        labore cumque aperiam sequi laudantium odit illum tenetur porro
                        adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                        molestiae maiores tempore voluptate excepturi possimus exercitationem?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        labore cumque aperiam sequi laudantium odit illum tenetur porro
                        adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                        molestiae maiores tempore voluptate excepturi possimus exercitationem?
                    </div>
                    <div className='right'>
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="My Image" />
                    </div>
                </div>
                <div
                    className={toggleState === 2 ? 'content active-content' : 'content'}
                >
                    <div className='left'>
                        
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        labore cumque aperiam sequi laudantium odit illum tenetur porro
                        adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                        molestiae maiores tempore voluptate excepturi possimus exercitationem?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        labore cumque aperiam sequi laudantium odit illum tenetur porro
                        adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                        molestiae maiores tempore voluptate excepturi possimus exercitationem?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        labore cumque aperiam sequi laudantium odit illum tenetur porro
                        adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                        molestiae maiores tempore voluptate excepturi possimus exercitationem?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        labore cumque aperiam sequi laudantium odit illum tenetur porro
                        adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                        molestiae maiores tempore voluptate excepturi possimus exercitationem?
                    </div>
                    <div className='right'>
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="My Image" />
                    </div>
                </div>
                <div
                    className={toggleState === 3 ? 'content active-content' : 'content'}
                >
                    <div className='left'>
                        
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        labore cumque aperiam sequi laudantium odit illum tenetur porro
                        adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                        molestiae maiores tempore voluptate excepturi possimus exercitationem?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        labore cumque aperiam sequi laudantium odit illum tenetur porro
                        adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                        molestiae maiores tempore voluptate excepturi possimus exercitationem?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        labore cumque aperiam sequi laudantium odit illum tenetur porro
                        adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                        molestiae maiores tempore voluptate excepturi possimus exercitationem?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        labore cumque aperiam sequi laudantium odit illum tenetur porro
                        adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                        molestiae maiores tempore voluptate excepturi possimus exercitationem?
                    </div>
                    <div className='right'>
                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="My Image" />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Services;
