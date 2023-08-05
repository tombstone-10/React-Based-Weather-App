import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {

    const currentDay = new Date().getDay();
    const forecastDay = WEEK_DAYS.slice(currentDay, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, currentDay));

    return (
        <>
            <div className="con-title">
                <label className="title">Weekly Forecast</label>
            </div>
            <Accordion allowZeroExpanded>
                { data.list.splice(0, 7).map((item, index) => (
                    <AccordionItem key={ index }>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img alt="weather" className="icon-small" src={ `icons/${item.weather[0].icon}.png` } />
                                    <label className="day">{ forecastDay[index] }</label>
                                    <div className="desc">
                                        <label className="description">{ item.weather[0].main }</label>
                                        <label className="temp">{ Math.round(item.main.temp) }°C</label>
                                    </div>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-grid">
                                <div className="daily-details-item">
                                    <label>Overall</label>
                                    <label className="overall-desc">{ item.weather[0].description }</label>
                                </div>
                                <div className="daily-details-item">
                                    <label>Precipitation</label>
                                    <label>{ item.clouds.all }%</label>
                                </div>
                                <div className="daily-details-item">
                                    <label>Wind</label>
                                    <label>{ Math.round((item.wind.speed) * 3.6) } km/h</label>
                                </div>
                                <div className="daily-details-item">
                                    <label>Humidity</label>
                                    <label>{ item.main.humidity }%</label>
                                </div>
                                <div className="daily-details-item">
                                    <label>Pressure</label>
                                    <label>{ item.main.pressure } mb</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                )) }
            </Accordion>
        </>
    )
}

export default Forecast;