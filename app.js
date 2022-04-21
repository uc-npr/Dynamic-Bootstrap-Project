let productcategory = [
    {
        "name": "Bootcamp",
        "image": "boot.jpg",
        "description": "Bootcamp description Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, soluta!",
        "code": "bootcamp"
    },
    {
        "name": "SDF",
        "image": "sdf.jpg",
        "description": "SDF description Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, soluta!",
        "code": "sdf"
    },
    {
        "name": "WMCA",
        "image": "wmca.jpg",
        "description": "WMCA description Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, soluta!",
        "code": "wmca"
    },
    {
        "name": "North of Tyne",
        "image": "not.jpg",
        "description": "North of Tyne description Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, soluta!",
        "code": "northoftyne"
    },
    {
        "name": "TVCA",
        "image": "tvca.jpg",
        "description": "TVCA description Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, soluta!",
        "code": "tvca"
    },
    {
        "name": "Liverpool",
        "image": "lp.jpg",
        "description": "Liverpool description Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, soluta!",
        "code": "liverpool"
    },
];

let productlist = {
    "bootcamp": [
        {
            "name": "Desktop Bootcamp",
            "image": "deskboot.jpg",
            "course": [
                "Windows Operating Systems Fundamentals, (98-349)",
                "ITIL 4, (ITIL-4)",
                "Effective Helpdesk (eff-help-desk)"
            ]
        },
        {
            "name": "Network Bootcamp",
            "image": "netboot.jpg",
            "course": [
                "Networking Fundamentals, (98-349)",
                "ITIL 4, (ITIL-4)",
                "Effective Helpdesk (eff-help-desk)"
            ],
        },
        {
            "name": "Cloud Bootcamp",
            "image": "cloudboot.jpg",
            "course": [
                "Azure Fundamentals, (AZ-900.AB1)",
                "Cloud+, (CV0-001)",
                "Effective Helpdesk (eff-help-desk)"
            ],
        },
        {
            "name": "Digital Marketing Bootcamp",
            "image": "dmboot.jpg",
            "course": [
                "ICT Web Design Essentials, (ICT-web-design)",
                "HTML5 Application Development Fundamentals, (98-375)",
                "CIW: Social Media Strategist (1D0-623)"
            ],
        },
        {
            "name": "Security Bootcamp",
            "image": "securityboot.jpg",
            "course": [
                "Windows Operating Systems Fundamentals, (98-349)",
                "Security Fundamentals (98-367)"
            ],
        },
    ],
    "sdf": [
        {
            "name": "SDF",
            "image": "sdf.jpg",
            "course": [
                "Microsoft Azure Fundamentals (AZ-900.AB1)",
                "Microsoft Azure Fundamentals (AZ-900.AB1)",
                "Microsoft Azure AI Fundamentals (AZ-900.AB1)",
                "Microsoft Azure Data Fundamentals (DP-900.AP1)",
                "Microsoft 365 Fundamentals (MS-900.AP1)",
                "Microsoft Power Platform Fundamentals",
                "Microsoft Security, Compliance, and Identity Fundamentals",
            ],
        }
    ],
    "wmca": [
        {
            "name": "WMCA",
            "image": "wmca.jpg",
            "course": [
                "Programming in HTML and CSS (98-383)",
                "Microsoft Azure Fundamentals (AZ-900.AB1)",
            ],
        }
    ],
    "northoftyne": [
        {
            "name": "North of Tyne",
            "image": "not.jpg",
            "course": [
                "Programming in HTML and CSS (98-383)",
            ],
        }
    ],
    "tvca": [
        {
            "name": "TVCA",
            "image": "tvca.jpg",
            "course": [
                "Programming in HTML and CSS (98-383)",
            ],
        }
    ],
    "liverpool": [
        {
            "name": "Liverpool",
            "image": "liverpool.jpg",
            "course": [
                "Programming in HTML and CSS (98-383)",
                "Azure Fundamentals (AZ-900.AB1)",
            ],
        }
    ],
};


productcategory.forEach((element) => {
    let html = `
    <li class="nav-item" role="presentation">
        <button class="nav-link" id="${element["code"]}-tab" data-bs-toggle="tab" data-bs-target="#${element["code"]}" type="button" role="tab" aria-controls="${element["code"]}" aria-selected="true"><b>${element["name"]}</b></button>
    </li>
    `;

    document.getElementById("productlist").innerHTML += `
    <div class="tab-pane fade pt-4 px-4" id="${element["code"]}" role="tabpanel" aria-labelledby="${element["code"]}-tab">
        <h3>${element["name"]}</h3>
        <p>${element["description"]}</p>

        ${(function () {
            let length = productlist[element["code"]].length;
            let str = ``;
            for (let i = 0; i < length; i++) {
                if(i%2 == 0){
                    str += `
                <div class="card mx-5 shadow border-0 my-5">
                    <div class="row g-0  flex-row-reverse">
                        <div class="col-md-4">
                            <img src="./images/${productlist[element["code"]][i]["image"]}" class=" rounded-start " height="auto" width="100%" alt="...">
                        </div>
                        <div class="col-md-8 px-3 d-flex flex-column align-items-start">
                            <div class="card-body">
                                <h5 class="card-title mt-2">${productlist[element["code"]][i]["name"]}</h5>
                                <ol class="list-group-numbered mt-2">
                                    ${
                                        (function(){
                                            let length2 = productlist[element["code"]][i]["course"].length;
                                            let str2 = ``;
                                            for (let j = 0; j < length2; j++) {
                                                str2+=`
                                                <li>${productlist[element["code"]][i]["course"][j]}</li>
                                                `;
                                            }
                                            return str2;
                                        })()
                                    }
                                </ol>
                            </div>
                            <div class="btn border-primary mx-3 mb-4"><a href="#" class="text-decoration-none">More</a></div>
                        </div>
                    </div>
                </div>`;
                }else{
                    str += `
                <div class="card mx-5 my-5 shadow border-0">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="./images/${productlist[element["code"]][i]["image"]}" class=" rounded-start " height="100%" width="100%" alt="...">
                        </div>
                        <div class="col-md-8  px-3 d-flex flex-column align-items-end">
                            <div class="card-body float-end">
                                <h5 class="card-title mt-2 text-end">${productlist[element["code"]][i]["name"]}</h5>
                                <ol class="list-group-numbered mt-2">
                                    ${
                                        (function(){
                                            let length2 = productlist[element["code"]][i]["course"].length;
                                            let str2 = ``;
                                            for (let j = 0; j < length2; j++) {
                                                str2+=`
                                                <li>${productlist[element["code"]][i]["course"][j]}</li>
                                                `;
                                            }
                                            return str2;
                                        })()
                                    }
                                </ol>
                            </div>
                            <div class="btn border-primary mx-3 mb-4 float-end"><a href="#" class=" text-decoration-none">More</a></div>
                        </div>
                    </div>
                </div>`;
                }
            }
            return str;
        })()}
    
    </div>
    
    `;
    document.getElementById("productcategory").innerHTML += html;
});

document.getElementById("bootcamp-tab").classList.add("active");
document.getElementById("bootcamp").classList.add("show");
document.getElementById("bootcamp").classList.add("active");

