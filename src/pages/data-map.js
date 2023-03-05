import * as React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import Seo from "../components/seo"
import Layout from "../components/layout"
import geojson from "../../components/data/final_01646500.json"
import { sizes } from "gatsby-plugin-sharp"

const DataMap = () => {
    return (
        <Layout>
            <table>
                <tr valign='top'>
                    <td align="justified">
                        <span align="left">
                            <form action = "https://selsayed25-didactic-rotary-phone-qgxpq4qqpxjc4pg-8000.preview.app.github.dev/data-map/">
                                <label style={{ padding: "10px" }}>
                                    Which state?
                                    <br />
                                    <select style={{ fontFamily: "Century Gothic", padding: "10px", marginLeft: "13px", marginTop: "5px", marginRight: "10px", marginBottom: "10px", fontSize: "20px"}}>
                                        <option value="select">Select a state</option>
                                        <option value="alabama">Alabama</option>
                                        <option value="alaska">Alaska</option>
                                        <option value="arizona">Arizona</option>
                                        <option value="arkansas">Arkansas</option>
                                        <option value="california">California</option>
                                        <option value="colorado">Colorado</option>
                                        <option value="connecticut">Connecticut</option>
                                        <option value="delaware">Delaware</option>
                                        <option value="florida">Florida</option>
                                        <option value="alaska">Alaska</option>
                                        <option value="georgia">Georgia</option>
                                        <option value="hawaii">Hawaii</option>
                                        <option value="idaho">Idaho</option>
                                        <option value="illinois">Illinois</option>
                                        <option value="indiana">Indiana</option>
                                        <option value="iowa">Iowa</option>
                                        <option value="kansas">Kansas</option>
                                        <option value="kentucky">Kentucky</option>
                                        <option value="louisiana">Louisiana</option>
                                        <option value="maine">Maine</option>
                                        <option value="maryland">Maryland</option>
                                        <option value="massachusetts">Massachusetts</option>
                                        <option value="michigan">Michigan</option>
                                        <option value="minnesota">Minnesota</option>
                                        <option value="mississippi">Mississippi</option>
                                        <option value="missouri">Missouri</option>
                                        <option value="montana">Montana</option>
                                        <option value="nebraska">Nebraska</option>
                                        <option value="nevada">Nevada</option>
                                        <option value="new-hampshire">New Hampshire</option>
                                        <option value="new-jersey">New Jersey</option>
                                        <option value="new-mexico">New Mexico</option>
                                        <option value="new-york">New York</option>
                                        <option value="north-carolina">North Carolina</option>
                                        <option value="north-dakota">North Dakota</option>
                                        <option value="ohio">Ohio</option>
                                        <option value="oklahoma">Oklahoma</option>
                                        <option value="oregon">Oregon</option>
                                        <option value="pennsylvania">Pennsylvania</option>
                                        <option value="rhode-island">Rhode Island</option>
                                        <option value="south-carolina">South Carolina</option>
                                        <option value="south-dakota">South Dakota</option>
                                        <option value="tennessee">Tennessee</option>
                                        <option value="texas">Texas</option>
                                        <option value="utah">Utah</option>
                                        <option value="vermont">Vermont</option>
                                        <option value="virginia">Virginia</option>
                                        <option value="washington">Washington</option>
                                        <option value="west-virginia">West Virginia</option>
                                        <option value="wisconsin">Wisconsin</option>
                                        <option value="wyoming">Wyoming</option>
                                    </select>
                                </label>
                                {/* <br />
                                <input type="checkbox" name="Discharge" value="on" /> Discharge
                                <br />
                                <input type="checkbox" name="Turbidity" value="on" /> Turbidity
                                <br />
                                <input type="checkbox" name="Temperature" value="on" /> Temperature
                                <br />
                                <input type="checkbox" name="pH" value="on" /> pH
                                <br />
                                <input type="checkbox" name="Chemical Oxygen Demand" value="on" /> Chemical Oxygen Demand
                                <br /> */}
                                <input type="submit" name="submit" value="Submit" style={{ fontFamily: "Century Gothic", padding: "10px", marginLeft: "10px", marginTop: "5px", marginRight: "60px", marginBottom: "20px", fontSize: "20px" }} />

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

export const Head = () => <Seo title="Data Map" />

export default DataMap