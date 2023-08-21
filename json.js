let jsonObject = {
    element:"div",
    class:"container-fluid",
    child:
    [   {
        element:"div",
        class:"row",
        child:
        [
            {
            element:"div",
            class:"col-12",
            id:"scroll",
            child:
            [
                {
                element:"div",
                class:"row",
                id:"above",
                child:
                [
                    {
                    element:"div",
                    class:"col-md-8 col-sm-12",
                    id:"aboveleft",
                    child:
                    [   
                        {
                        element:"div",
                        class:"carDiv",
                        child:
                        [
                            {
                            element:"img",
                            src:"./icons/car-svgrepo-com.svg",
                            alt:"Car"
                            }
                        ]
                        },
                        {
                        element:"div",
                        class:"analyticsDiv",
                        child:
                        [
                            {
                                element:"h5",
                                text:"Analytics Dashboard"
                            },
                            {
                                element:"p",
                                text:"This is an example dashboard created using built-in elements and components"
                            }
                        ]
                        }
                    ]
                    },
                    {
                        element:"div",
                        class:"col-md-4 col-sm-12",
                        id:"aboveright",
                        child:
                        [
                            {
                                element:"div",
                                class:"starDiv",
                                child:
                                [
                                    {
                                        element:"i",
                                        class:"fa-solid fa-star fa-md"
                                    }
                                ]
                            },
                            {
                                element:"div",
                                class:"buttonDiv",
                                child:
                                [
                                    {
                                        element:"button",
                                        type:"dropdown",
                                        id:"button",
                                        child:
                                        [
                                            {
                                                element:"i",
                                                class:"fa-solid fa-briefcase briefcase"
                                            },
                                            {
                                                element:"span",
                                                text:"Buttons"
                                            },
                                            {
                                                element:"i",
                                                class:"fa-solid fa-caret-down fa-xs caret-down"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
                },
                {
                    element:"div",
                    class:"row",
                    id:"below",
                    child:[
                        {
                            element:"div",
                            class:"col-md-4 col-12",
                            child:[
                                {
                                    element:"div",
                                    class:"ordersLeft",
                                    id:"common",
                                    child:[
                                        {
                                            element:"div",
                                            class:"col-7",
                                            child:[
                                                {
                                                    element:"h5",
                                                    text:"Total Orders"
                                                },
                                                {
                                                    element:"small",
                                                    text:"Last year expenses"
                                                }
                                            ]
                                        },
                                        {
                                            element:"div",
                                            class:"col-5 ordersRight",
                                            child:[
                                                {
                                                    element:"h2",
                                                    text:"1896"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            element:"div",
                            class:"col-md-4 col-12",
                            child:[
                                {
                                    element:"div",
                                    class:"clientsLeft",
                                    id:"common",
                                    child:[
                                        {
                                            element:"div",
                                            class:"col-7",
                                            child:[
                                                {
                                                    element:"h5",
                                                    text:"Clients"
                                                },
                                                {
                                                    element:"small",
                                                    text:"Total Clients Profit"
                                                }
                                            ]
                                        },
                                        {
                                            element:"div",
                                            class:"col-5 clientsRight", 
                                            child:[
                                                {
                                                    element:"h2",
                                                    text:"$568"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            element:"div",
                            class:"col-md-4 col-12",
                            child:[
                                {
                                    element:"div",
                                    class:"followersLeft",
                                    id:"common",
                                    child:[
                                        {
                                            element:"div",
                                            class:"col-7",
                                            child:[
                                                {
                                                    element:"h5",
                                                    text:"Followers"
                                                },
                                                {
                                                    element:"small",
                                                    text:"People Interested"
                                                }
                                            ]
                                        },
                                        {
                                            element:"div",
                                            class:"col-5 followersRight",
                                            child:[
                                                {
                                                    element:"h2",
                                                    text:"46%"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
            }
        ]
        }
    ]
}

function createPage(obj){
    console.log(obj.element);
    
    let ele = document.createElement(obj.element);
    if(obj.class){
        ele.setAttribute("class",obj.class);
    }
    if(obj.text){
        ele.innerText = obj.text;
    }
    if(obj.type){
        ele.setAttribute("type",obj.type);
    }
    if(obj.src){
        ele.setAttribute("src",obj.src);
    }
    if(obj.alt){
        ele.setAttribute("alt",obj.alt);
    }
    if(obj.id){
        ele.setAttribute("id",obj.id);
    }
    if(obj.child){
        for (let child of obj.child) {
            ele.appendChild(createPage(child))
        }
    } 
    return ele;
}

document.body.appendChild(createPage(jsonObject));