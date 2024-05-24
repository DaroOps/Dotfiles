import { getAllClientsNameByCountry } from "../js/modules/clients/clients.js";
import {reports} from "./modules/reports/reports.js" 


const createReport = (report) => {
  let queryReportDetails = document?.querySelector("#report__details");

  let fragment = ` <details id="queryDetails${report.queryID}">
                        <summary>
                            <div class="details__description">${report.section}: </div>
                            <div class="details__container">
                                <p class= "moving-text">${report.title}</p>
                            </div>
                        </summary>
                        <div class="report__container"></div>
                     </details>
                     `;

  queryReportDetails.innerHTML += fragment;

  generateInfo(report);
};

const generateInfo = (report) => {
  const queryDetails = document?.querySelector(`#queryDetails${report.queryID}`);

  queryDetails.addEventListener("click", async () => {
    let [, report__container] = queryDetails.children;

    if (!report__container.innerHTML) {
      let data = await report.getData();
      report__container.innerHTML = report.generateInfo(data);
    }
  });
};


reports.forEach(report  => createReport(report))

// createReport(
//   "Clients",
//   "1. (1) List all Spanish customers' names.",
//   generateInfo
// );

// let plantilla = "";
// clients.forEach((client) => {
//   plantilla += `
//       <div class="report__card">
//       <div class="card__title">
//       <div>Country: Spain</div>
//       </div>
//       <div class="card__body">
//       <div class="body__marck">
//       <p><b>Client name: </b>${client.client_name}</p>
//       </div>
//       </div>
//       </div>
//       `;
// });

// `
//             <div class="report__card">
//             <div class="card__title">
//             <div>Country: Spain</div>
//             </div>
//             <div class="card__body">
//             <div class="body__marck">
//             <p><b>Client name: </b>${client.client_name}</p>
//             </div>
//             </div>
//             </div>

// import { getClientsEmploy } from "./module/clients/clients.js";

// const queryAboutTable7 = document.querySelector("#queryAboutTable7");

// queryAboutTable7.addEventListener("click", async(event)=>{
//     let [,report__container] = queryAboutTable7.children
//     if(!report__container.innerHTML){
//         let data = await getClientsEmploy();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>${val.client_name}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre del empleado: </b>${val.name_employee}</p>
//                         <p><b>Ciudad: </b>${val.city}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }

// })

{
  /* <details id="queryAboutTable7">
                    <summary>
                        <div class="details__description">Campus: </div>
                        <div class="details__container">
                            <p class= "moving-text">Devuelve un listado con el nombre de los todos los clientes españoles</p>
                            <!-- <p><marquee behavior="" direction="">Consultas sobre una tabla 6.Devuelve un listado con el nombre de los todos los clientes españoles.</marquee></p> -->
                        </div>
                    </summary>
                    <div class="report__container"></div>
                </details> */
}
