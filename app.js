let productcategory = [
    {
        "name": "Bootcamps",
        "image": "boot.jpg",
        "description": "Bootcamp description Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, soluta!",
        "code": "bootcamp"
    },
    {
        "name": "Projects",
        "image": "projects.jpg",
        "description": "Projects description Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, soluta!",
        "code": "project"
    }
];

let productlist = {
    "bootcamp": [
        {
            "name": "Desktop Bootcamp",
            "image": "deskboot.jpg",
            "code": "desktop-bootcamp",
            "course": [
                "Windows Operating Systems Fundamentals, (98-349)",
                "ITIL 4, (ITIL-4)",
                "Effective Helpdesk (eff-help-desk)"
            ]
        },
        {
            "name": "Network Bootcamp",
            "image": "netboot.jpg",
            "code": "network-bootcamp",
            "course": [
                "Networking Fundamentals, (98-349)",
                "ITIL 4, (ITIL-4)",
                "Effective Helpdesk (eff-help-desk)"
            ],
        },
        {
            "name": "Cloud Bootcamp",
            "image": "cloudboot.jpg",
            "code": "cloud-bootcamp",
            "course": [
                "Azure Fundamentals, (AZ-900.AB1)",
                "Cloud+, (CV0-001)",
                "Effective Helpdesk (eff-help-desk)"
            ],
        },
        {
            "name": "Digital Marketing Bootcamp",
            "image": "dmboot.jpg",
            "code": "digital-marketing-bootcamp",
            "course": [
                "ICT Web Design Essentials, (ICT-web-design)",
                "HTML5 Application Development Fundamentals, (98-375)",
                "CIW: Social Media Strategist (1D0-623)"
            ],
        },
        {
            "name": "Security Bootcamp",
            "image": "securityboot.jpg",
            "code": "security-boot",
            "course": [
                "Windows Operating Systems Fundamentals, (98-349)",
                "Security Fundamentals (98-367)"
            ],
        },
    ],
    "project": [
        {
            "name": "SDF",
            "image": "sdf.jpg",
            "code": "sdf",
            "course": [
                "Microsoft Azure Fundamentals (AZ-900.AB1)",
                "Microsoft Azure Fundamentals (AZ-900.AB1)",
                "Microsoft Azure AI Fundamentals (AZ-900.AB1)",
                "Microsoft Azure Data Fundamentals (DP-900.AP1)",
                "Microsoft 365 Fundamentals (MS-900.AP1)",
                "Microsoft Power Platform Fundamentals",
                "Microsoft Security, Compliance, and Identity Fundamentals",
            ],
        },
        {
            "name": "WMCA",
            "image": "wmca.jpg",
            "code": "wmca",
            "course": [
                "Programming in HTML and CSS (98-383)",
                "Microsoft Azure Fundamentals (AZ-900.AB1)",
            ],
        },
        {
            "name": "North of Tyne",
            "image": "not.jpg",
            "code": "north-of-tyne",
            "course": [
                "Programming in HTML and CSS (98-383)",
            ],
        },
        {
            "name": "TVCA",
            "image": "tvca.jpg",
            "code": "tvca",
            "course": [
                "Programming in HTML and CSS (98-383)",
            ],
        },
        {
            "name": "Liverpool",
            "image": "liverpool.jpg",
            "code": "liverpool",
            "course": [
                "Programming in HTML and CSS (98-383)",
                "Azure Fundamentals (AZ-900.AB1)",
            ],
        }

    ],
};


productcategory.forEach((element) => {
    let html = `
    <li class="nav-item lead col-6" role="presentation">
        <button class="nav-link w-100 h-100 fs-2 py-4" id="${element["code"]}-tab" data-bs-toggle="tab" data-bs-target="#${element["code"]}" aria-controls="${element["code"]}" >
            
            <b>${element["name"]}</b>
        </button>
    </li>
    `;

    document.getElementById("productlist").innerHTML += `

    <div class="tab-pane fade" id="${element["code"]}" role="tabpanel" aria-labelledby="${element["code"]}-tab">
                    <div class="my-5 p-2 border border-success border-4 border-top-0 border-bottom-0 border-end-0">
                        <h3 class="fs-4">${element["name"]}</h3>
                        <p class="text-secondary small">${element["description"]}</p>
                    </div>
                    ${(function () {
                        let length = productlist[element["code"]].length;
                        let str = ``;
                        for (let i = 0; i < length; i++) {

                            if(!(i%2 == 0)){
                                str += `
                                    <div class="container mt-3">
                                        <div class="row px-4 py-5 my-4 bg-light justify-content-center">
                                            <h2 class="text-center text-dark">${productlist[element["code"]][i]["name"]}</h2>
                                            <p class="text-center fs-4 lead mt-2 col-12 col-sm-8 col-md-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptate maiores nisi cupiditate incidunt doloribus!</p>
                                        </div>
                                        <div class="row p=0 flex-column-reverse flex-md-row">
                                            <div class="col-12 col-md-6 p-0 d-flex flex-column justify-content-center">
                                                ${(function () {
                                                    let length2 = productlist[element["code"]][i]["course"].length;
                                                    let str2 = ``;
                                                    for (let j = 0; j < length2; j++) {
                                                        str2 += `
                                                            <div class="alert alert-light text-primary text-center fs-4" role="alert">
                                                                <a class="text-decoration-none" href="#">${productlist[element["code"]][i]["course"][j]}</a>
                                                            </div>
                                                        `;
                                                    }
                                                    return str2;
                                                })()
                                                }
                                            </div>
                                            <div class="col-12 col-md-6 text-center text-dark p-0">
                                                <img src="./images/${productlist[element["code"]][i]["image"]}" alt="${productlist[element["code"]][i]["name"]}" height="auto" width="100%">
                                            </div>
                                        </div>
                                    </div>
                                    `;
                            }else{
                                str += `
                                    <div class="container mt-3">
                                        <div class="row bg-light px-4 py-5 my-4 justify-content-center">
                                            <h2 class="text-center text-dark">${productlist[element["code"]][i]["name"]}</h2>
                                            <p class="text-center fs-4 lead mt-2 col-12 col-sm-8 col-md-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptate maiores nisi cupiditate incidunt doloribus!</p>
                                        </div>
                                        <div class="row p=0">
                                            <div class="col-12 col-md-6 text-center text-dark p-0 m-0">
                                                <img src="./images/${productlist[element["code"]][i]["image"]}" alt="${productlist[element["code"]][i]["name"]}" style="width:100%; height: 500px; object-fit: cover;">
                                            </div>
                                            <div class="col-12 col-md-6 p-0 m-0 d-flex flex-column justify-content-center">
                                                ${(function () {
                                                    let length2 = productlist[element["code"]][i]["course"].length;
                                                    let str2 = ``;
                                                    for (let j = 0; j < length2; j++) {
                                                        str2 += `
                                                        <div class="m-0 alert alert-light text-primary text-center fs-4" role="alert">
                                                        <a class="text-decoration-none" href="#">${productlist[element["code"]][i]["course"][j]}</a>
                                                    </div>
                                                        `;
                                                    }
                                                    return str2;
                                                })()
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    `;
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




