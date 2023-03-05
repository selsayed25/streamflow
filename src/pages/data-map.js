import * as React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import Seo from "../components/seo"
import Layout from "../components/layout"
import geojson from "../../components/data/final_01646500.json"
import { sizes } from "gatsby-plugin-sharp"
import { Script } from "gatsby"
//import { wrapper } from "../../components/scripts/wrapper"
// import { PythonProvider } from 'react-py'
// import pyodide from 'pyodide';
//import { Helmet } from "react-helmet"

const DataMap = () => {
    return (
        
        <Layout>
            <table>
                <tr valign='top'>
                    <td align="justified">
                        
                        <span align="left">
                            <form id="mapData">
                                <label style={{ padding: "10px" }}>
                                    Which state?
                                    <br />
                                    <select id="state" style={{ fontFamily: "Century Gothic", padding: "10px", marginLeft: "13px", marginTop: "5px", marginRight: "10px", marginBottom: "10px", fontSize: "20px" }}>
                                        <option value="select">Select a state</option>
                                        <option value="al">Alabama</option>
                                        <option value="ak">Alaska</option>
                                        <option value="az">Arizona</option>
                                        <option value="ar">Arkansas</option>
                                        <option value="ca">California</option>
                                        <option value="co">Colorado</option>
                                        <option value="ct">Connecticut</option>
                                        <option value="de">Delaware</option>
                                        <option value="dc">District Of Columbia</option>
                                        <option value="fl">Florida</option>
                                        <option value="ga">Georgia</option>
                                        <option value="hi">Hawaii</option>
                                        <option value="id">Idaho</option>
                                        <option value="il">Illinois</option>
                                        <option value="in">Indiana</option>
                                        <option value="ia">Iowa</option>
                                        <option value="ks">Kansas</option>
                                        <option value="ky">Kentucky</option>
                                        <option value="la">Louisiana</option>
                                        <option value="me">Maine</option>
                                        <option value="md">Maryland</option>
                                        <option value="ma">Massachusetts</option>
                                        <option value="mi">Michigan</option>
                                        <option value="mn">Minnesota</option>
                                        <option value="ms">Mississippi</option>
                                        <option value="mo">Missouri</option>
                                        <option value="mt">Montana</option>
                                        <option value="ne">Nebraska</option>
                                        <option value="nv">Nevada</option>
                                        <option value="nh">New Hampshire</option>
                                        <option value="nj">New Jersey</option>
                                        <option value="nm">New Mexico</option>
                                        <option value="ny">New York</option>
                                        <option value="nc">North Carolina</option>
                                        <option value="nd">North Dakota</option>
                                        <option value="oh">Ohio</option>
                                        <option value="ok">Oklahoma</option>
                                        <option value="or">Oregon</option>
                                        <option value="pa">Pennsylvania</option>
                                        <option value="ri">Rhode Island</option>
                                        <option value="sc">South Carolina</option>
                                        <option value="sd">South Dakota</option>
                                        <option value="tn">Tennessee</option>
                                        <option value="tx">Texas</option>
                                        <option value="ut">Utah</option>
                                        <option value="vt">Vermont</option>
                                        <option value="va">Virginia</option>
                                        <option value="wa">Washington</option>
                                        <option value="wv">West Virginia</option>
                                        <option value="wi">Wisconsin</option>
                                        <option value="wy">Wyoming</option>
                                    </select>
                                    
                                </label>
                                <br />
                                <input id="discharge" type="checkbox" name="Discharge" value="on" /> Discharge
                                <br />
                                <input id="turbidity" type="checkbox" name="Turbidity" value="on" /> Turbidity
                                <br />
                                <input id="temperature" type="checkbox" name="Temperature" value="on" /> Temperature
                                <br />
                                <input id="pH" type="checkbox" name="pH" value="on" /> pH
                                <br />
                                <input id="chemical oxygen demand" type="checkbox" name="Chemical Oxygen Demand" value="on" /> Chemical Oxygen Demand
                                <br />
                                <button onClick={processMap} type="button" style={{ fontFamily: "Century Gothic", padding: "10px", marginLeft: "10px", marginTop: "5px", marginRight: "60px", marginBottom: "20px", fontSize: "20px" }}> Submit </button>
                            </form>
                        </span>
                    </td>                    
                    <td>
                        
                        <div align="right" margin-right="10px">
                            
                            <MapContainer style={{ height: "900px", width: "1650px", textAlign: "right" }} center={[geojson["LATITUDE"], geojson["LONGITUDE"]]} zoom={13} scrollWheelZoom={false}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[geojson["LATITUDE"], geojson["LONGITUDE"]]}>
                                    <Popup>
                                        {geojson["STATION_NAME"]} <br /> {geojson["DATA_DESCRIPTION"]} <br /> {geojson["DATA_VALUE"]} {geojson["DATA_UNIT"]}
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </td>
                </tr>
            </table>
        </Layout>
    )
}

//const pyodide = await loadPyodide({indexURL: 'https://cdn.jsdelivr.net/pyodide/dev/full/'});
function processMap() {
    var form = document.forms['mapData'];
    var state = form.elements['state'].value;
    var discharge = form.elements['discharge'].checked;
    var turbidity = form.elements['turbidity'].checked;
    var temperature = form.elements['temperature'].checked;
    var pH = form.elements['pH'].checked;
    var chemicalOxygenDemand = form.elements['chemical oxygen demand'].checked;
    //var data = JSON.stringify({ STATE: state, DISCHARGE: discharge, TURBIDITY: turbidity, TEMPERATURE: temperature, PH: pH, CHEMICALOXYGENDEMAND: chemicalOxygenDemand });
}
    //var pyodide = loadPyodide();
    //write code to run python script
    // const python_code = `
    //     print("Hello World")
    // `;
    
    // pyodide.runPython(python_code);
    //console.log("test");
// write a javascript function to process the form data

/***** feteches the data *****/


export const Head = () => <Seo title="Data Map" />

export default DataMap