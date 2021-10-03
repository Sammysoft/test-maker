import React , { useState, useEffect }  from 'react';
import  axois from 'axios';
import axios from 'axios';


export default function mainbar (){
        useEffect(()=> {
            axios.get('http://localhost:5056/api/')
        })




    return(
        <>
            <section className="content">
    <div className="">
        <div className="block-header">
            <div className="row">
                <div className="col-lg-7 col-md-6 col-sm-12">
                    <h2>Dashboard</h2>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home"></i> Calibrain</a></li>
                        <li className="breadcrumb-item active">Dashboard </li>
                    </ul>
                    <button className="btn btn-primary btn-icon mobile_menu" type="button"><i className="zmdi zmdi-sort-amount-desc"></i></button>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12">
                    <button className="btn btn-primary btn-icon float-right right_icon_toggle_btn" type="button"><i className="zmdi zmdi-arrow-right"></i></button>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    {/* <div className="card widget_2 big_icon traffic">
                        <div className="body">
                            <h6>Traffic</h6>
                            <h2>20 <small className="info">of 1Tb</small></h2>
                            <small>2% higher than last month</small>
                            <div className="progress">
                                <div className="progress-bar l-amber" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width: "45%;"}}></div>
                            </div>
                        </div>
                    </div> */}
                </div>
                {/* <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card widget_2 big_icon sales">
                        <div className="body">
                            <h6>Sales</h6>
                            <h2>12% <small className="info">of 100</small></h2>
                            <small>6% higher than last month</small>
                            <div className="progress">
                                <div className="progress-bar l-blue" role="progressbar" aria-valuenow="38" aria-valuemin="0" aria-valuemax="100" style={{width: "38%;"}}></div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card widget_2 big_icon email">
                        <div className="body">
                            <h6>Email</h6>
                            <h2>39 <small className="info">of 100</small></h2>
                            <small>Total Registered email</small>
                            <div className="progress">
                                <div className="progress-bar l-purple" role="progressbar" aria-valuenow="39" aria-valuemin="0" aria-valuemax="100" style={{width: "39%;"}}></div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card widget_2 big_icon domains">
                        <div className="body">
                            <h6>Domains</h6>
                            <h2>8 <small className="info">of 10</small></h2>
                            <small>Total Registered Domain</small>
                            <div className="progress">
                                <div className="progress-bar l-green" role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" style={{width: "89%;"}}></div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="row clearfix">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="header">
                            <h2><strong><i className="zmdi zmdi-chart"></i> Stats</strong> Report</h2>
                            <ul className="header-dropdown">
                                <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more"></i> </a>
                                    <ul className="dropdown-menu dropdown-menu-right slideUp">
                                        <li><a href="javascript:void(0);">Edit</a></li>
                                        <li><a href="javascript:void(0);">Delete</a></li>
                                        <li><a href="javascript:void(0);">Report</a></li>
                                    </ul>
                                </li>
                                <li className="remove">
                                    <a role="button" className="boxs-close"><i className="zmdi zmdi-close"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="body mb-2">
                            <div className="row clearfix">
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="state_w1 mb-1 mt-1">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h5>2,365</h5>
                                                <span><i className="zmdi zmdi-balance"></i> Junior Students</span>
                                            </div>
                                            <div className="sparkline" data-type="bar" data-width="97%" data-height="55px" data-bar-Width="3" data-bar-Spacing="5" data-bar-Color="#868e96">5,2,3,7,6,4,8,1</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="state_w1 mb-1 mt-1">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h5>365</h5>
                                                <span><i className="zmdi zmdi-balance"></i> Senior Students</span>
                                            </div>
                                            <div className="sparkline" data-type="bar" data-width="97%" data-height="55px" data-bar-Width="3" data-bar-Spacing="5" data-bar-Color="#2bcbba">8,2,6,5,1,4,4,3</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="state_w1 mb-1 mt-1">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h5>65</h5>
                                                <span><i className="zmdi zmdi-balance"></i> Staffs</span>
                                            </div>
                                            <div className="sparkline" data-type="bar" data-width="97%" data-height="55px" data-bar-Width="3" data-bar-Spacing="5" data-bar-Color="#82c885">4,4,3,9,2,1,5,7</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="state_w1 mb-1 mt-1">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <h5>2,055</h5>
                                                <span><i className="zmdi zmdi-balance"></i> Alumni</span>
                                            </div>
                                            <div className="sparkline" data-type="bar" data-width="97%" data-height="55px" data-bar-Width="3" data-bar-Spacing="5" data-bar-Color="#45aaf2">7,5,3,8,4,6,2,9</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="body">
                            <div id="chart-area-spline-sracked" className="c3_chart d_sales"></div>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card mcard_4">
                        <div className="body">
                            <ul className="header-dropdown list-unstyled">
                                <li className="dropdown">
                                    <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-menu"></i> </a>
                                    <ul className="dropdown-menu slideUp">
                                        <li><a href="javascript:void(0);">Edit</a></li>
                                        <li><a href="javascript:void(0);">Delete</a></li>
                                        <li><a href="javascript:void(0);">Report</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="img">
                                <img src="assets/images/lg/avatar1.jpg" className="rounded-circle" alt="profile-image" />
                            </div>
                            <div className="user">
                                <h5 className="mt-3 mb-1">Eliana Smith</h5>
                                <small className="text-muted">UI/UX Desiger</small>
                            </div>
                            <ul className="list-unstyled social-links">
                                <li><a href="javascript:void(0);"><i className="zmdi zmdi-dribbble"></i></a></li>
                                <li><a href="javascript:void(0);"><i className="zmdi zmdi-behance"></i></a></li>
                                <li><a href="javascript:void(0);"><i className="zmdi zmdi-pinterest"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card w_data_1">
                       <div className="body">
                            <div className="w_icon pink"><i className="zmdi zmdi-bug"></i></div>
                            <h4 className="mt-3 mb-0">12.1k</h4>
                            <span className="text-muted">Bugs Fixed</span>
                            <div className="w_description text-success">
                                <i className="zmdi zmdi-trending-up"></i>
                                <span>15.5%</span>
                            </div>
                       </div>
                    </div>
                    <div className="card w_data_1">
                        <div className="body">
                            <div className="w_icon cyan"><i className="zmdi zmdi-ticket-star"></i></div>
                            <h4 className="mt-3 mb-1">01.8k</h4>
                            <span className="text-muted">Submitted Tickers</span>
                            <div className="w_description text-success">
                                <i className="zmdi zmdi-trending-up"></i>
                                <span>95.5%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card">
                        <div className="body">
                            <div className="chat-widget">
                                <ul className="list-unstyled">
                                    <li className="left">
                                        <img src="assets/images/xs/avatar3.jpg" className="rounded-circle" alt="" />
                                        <ul className="list-unstyled chat_info">
                                            <li><small>Frank 11:00AM</small></li>
                                            <li><span className="message bg-blue">Hello, Michael</span></li>
                                            <li><span className="message bg-blue">How are you!</span></li>
                                        </ul>
                                    </li>
                                    <li className="right">
                                        <ul className="list-unstyled chat_info">
                                            <li><small>11:10AM</small></li>
                                            <li><span className="message">Hello, Frank</span></li>
                                        </ul>
                                    </li>
                                    <li className="right">
                                        <ul className="list-unstyled chat_info">
                                            <li><small>11:11AM</small></li>
                                            <li><span className="message">I'm fine what about you?</span></li>
                                        </ul>
                                    </li>
                                    <li className="left">
                                        <img src="assets/images/xs/avatar2.jpg" className="rounded-circle" alt="" />
                                        <ul className="list-unstyled chat_info">
                                            <li><small>Gary 11:13AM</small></li>
                                            <li><span className="message bg-indigo">Hello, Michael and Frank</span></li>
                                        </ul>
                                    </li>
                                    <li className="left">
                                        <img src="assets/images/xs/avatar5.jpg" className="rounded-circle" alt="" />
                                        <ul className="list-unstyled chat_info">
                                            <li><small>Hossein 11:14AM</small></li>
                                            <li><span className="message bg-amber">Hello, team</span></li>
                                            <li><span className="message bg-amber">Please let me know your requirements.</span></li>
                                            <li><span className="message bg-amber">How would like to connect with us?</span></li>
                                        </ul>
                                    </li>
                                    <li className="right">
                                        <ul className="list-unstyled chat_info">
                                            <li><small>11:15AM</small></li>
                                            <li><span className="message">Hello, Hossein</span></li>
                                            <li><span className="message">Meeting on conference room at 12:00PM</span></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="input-group mt-3">
                                <div className="input-group-prepend">
                                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Add</button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="javascript:void(0);">Tim Hank</a>
                                        <a className="dropdown-item" href="javascript:void(0);">Hossein Shams</a>
                                        <a className="dropdown-item" href="javascript:void(0);">John Smith</a>
                                    </div>
                                </div>
                                <input type="text" className="form-control" placeholder="Enter text here..." aria-label="Text input with dropdown button" />
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="zmdi zmdi-mail-send"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="row clearfix">
                <div className="col-md-12 col-lg-8">
                    <div className="card">
                        <div className="header">
                            <h2><strong>Visitors</strong> Statistics</h2>
                            <ul className="header-dropdown">
                                <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more"></i> </a>
                                    <ul className="dropdown-menu dropdown-menu-right slideUp">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another action</a></li>
                                        <li><a href="javascript:void(0);">Something else</a></li>
                                    </ul>
                                </li>
                                <li className="remove">
                                    <a role="button" className="boxs-close"><i className="zmdi zmdi-close"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="body">
                            <div id="world-map-markers" className="jvector-map"></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2><strong>Distribution</strong></h2>
                            <ul className="header-dropdown">
                                <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more"></i> </a>
                                    <ul className="dropdown-menu dropdown-menu-right slideUp">
                                        <li><a href="javascript:void(0);">Edit</a></li>
                                        <li><a href="javascript:void(0);">Delete</a></li>
                                        <li><a href="javascript:void(0);">Report</a></li>
                                    </ul>
                                </li>
                                <li className="remove">
                                    <a role="button" className="boxs-close"><i className="zmdi zmdi-close"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="body text-center">
                            <div id="chart-pie" className="c3_chart d_distribution"></div>
                            <button className="btn btn-primary mt-4 mb-4">View More</button>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="row clearfix">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="header">
                            <h2><strong>Traffic</strong> Source</h2>
                            <ul className="header-dropdown">
                                <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more"></i> </a>
                                    <ul className="dropdown-menu dropdown-menu-right slideUp">
                                        <li><a href="javascript:void(0);">Edit</a></li>
                                        <li><a href="javascript:void(0);">Delete</a></li>
                                        <li><a href="javascript:void(0);">Report</a></li>
                                    </ul>
                                </li>
                                <li className="remove">
                                    <a role="button" className="boxs-close"><i className="zmdi zmdi-close"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="body">
                            <div className="row">
                                <div className="col-lg-8 col-md-6 col-sm-12">
                                    <div id="chart-area-step" className="c3_chart d_traffic"></div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <span> More than 30% percent of users come from direct links. Check details page for more information.</span>
                                    <div className="progress mt-4">
                                        <div className="progress-bar l-amber" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width: "45%"}}></div>
                                    </div>
                                    <div className="d-flex bd-highlight mt-4">
                                        <div className="flex-fill bd-highlight">
                                            <h5 className="mb-0">21,521 <i className="zmdi zmdi-long-arrow-up"></i></h5>
                                            <small>Today</small>
                                        </div>
                                        <div className="flex-fill bd-highlight">
                                            <h5 className="mb-0">%12.35 <i className="zmdi zmdi-long-arrow-down"></i></h5>
                                            <small>Last month %</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
</section>
        </>
    )
}