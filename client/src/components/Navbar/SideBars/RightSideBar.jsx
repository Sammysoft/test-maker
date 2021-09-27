import React from 'react';

export default function(){
    return(
        <>
        <div className="navbar-right">
        <ul className="navbar-nav">
            <li><a href="#search" className="main_search" title="Search..."><i className="zmdi zmdi-search"></i></a></li>
            <li className="dropdown">
                <a href="javascript:void(0);" className="dropdown-toggle" title="App" data-toggle="dropdown" role="button"><i className="zmdi zmdi-apps"></i></a>
                <ul className="dropdown-menu slideUp2">
                    <li className="header">App Sortcute</li>
                    <li className="body">
                        <ul className="menu app_sortcut list-unstyled">
                            <li>
                                <a href="image-gallery.html">
                                    <div className="icon-circle mb-2 bg-blue"><i className="zmdi zmdi-camera"></i></div>
                                    <p className="mb-0">Photos</p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div className="icon-circle mb-2 bg-amber"><i className="zmdi zmdi-translate"></i></div>
                                    <p className="mb-0">Translate</p>
                                </a>
                            </li>
                            <li>
                                <a href="events.html">
                                    <div className="icon-circle mb-2 bg-green"><i className="zmdi zmdi-calendar"></i></div>
                                    <p className="mb-0">Calendar</p>
                                </a>
                            </li>
                            <li>
                                <a href="contact.html">
                                    <div className="icon-circle mb-2 bg-purple"><i className="zmdi zmdi-account-calendar"></i></div>
                                    <p className="mb-0">Contacts</p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div className="icon-circle mb-2 bg-red"><i className="zmdi zmdi-tag"></i></div>
                                    <p className="mb-0">News</p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div className="icon-circle mb-2 bg-grey"><i className="zmdi zmdi-map"></i></div>
                                    <p className="mb-0">Maps</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="dropdown">
                <a href="javascript:void(0);" className="dropdown-toggle" title="Notifications" data-toggle="dropdown" role="button"><i className="zmdi zmdi-notifications"></i>
                    <div className="notify"><span className="heartbit"></span><span className="point"></span></div>
                </a>
                <ul className="dropdown-menu slideUp2">
                    <li className="header">Notifications</li>
                    <li className="body">
                        <ul className="menu list-unstyled">
                            <li>
                                <a href="javascript:void(0);">
                                    <div className="icon-circle bg-blue"><i className="zmdi zmdi-account"></i></div>
                                    <div className="menu-info">
                                        <h4>8 New Members joined</h4>
                                        <p><i className="zmdi zmdi-time"></i> 14 mins ago </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div className="icon-circle bg-amber"><i className="zmdi zmdi-shopping-cart"></i></div>
                                    <div className="menu-info">
                                        <h4>4 Sales made</h4>
                                        <p><i className="zmdi zmdi-time"></i> 22 mins ago </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div className="icon-circle bg-red"><i className="zmdi zmdi-delete"></i></div>
                                    <div className="menu-info">
                                        <h4><b>Nancy Doe</b> Deleted account</h4>
                                        <p><i className="zmdi zmdi-time"></i> 3 hours ago </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div className="icon-circle bg-green"><i className="zmdi zmdi-edit"></i></div>
                                    <div className="menu-info">
                                        <h4><b>Nancy</b> Changed name</h4>
                                        <p><i className="zmdi zmdi-time"></i> 2 hours ago </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div className="icon-circle bg-grey"><i className="zmdi zmdi-comment-text"></i></div>
                                    <div className="menu-info">
                                        <h4><b>John</b> Commented your post</h4>
                                        <p><i className="zmdi zmdi-time"></i> 4 hours ago </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div className="icon-circle bg-purple"><i className="zmdi zmdi-refresh"></i></div>
                                    <div className="menu-info">
                                        <h4><b>John</b> Updated status</h4>
                                        <p><i className="zmdi zmdi-time"></i> 3 hours ago </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div className="icon-circle bg-light-blue"><i className="zmdi zmdi-settings"></i></div>
                                    <div className="menu-info">
                                        <h4>Settings Updated</h4>
                                        <p><i className="zmdi zmdi-time"></i> Yesterday </p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="footer"> <a href="javascript:void(0);">View All Notifications</a> </li>
                </ul>
            </li>
            <li className="dropdown">
                <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button"><i className="zmdi zmdi-flag"></i>
                <div className="notify"><span className="heartbit"></span><span className="point"></span></div>
                </a>
                <ul className="dropdown-menu slideUp2">
                    <li className="header">Tasks List <small className="float-right"><a href="javascript:void(0);">View All</a></small></li>
                    <li className="body">
                        <ul className="menu tasks list-unstyled">
                            <li>
                                <div className="progress-container progress-primary">
                                    <span className="progress-badge">eCommerce Website</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100" style={{width: "86%"}}>
                                            <span className="progress-value">86%</span>
                                        </div>
                                    </div>
                                    <ul className="list-unstyled team-info">
                                        <li className="m-r-15"><small>Team</small></li>
                                        <li>
                                            <img src="assets/images/xs/avatar2.jpg" alt="Avatar" />
                                        </li>
                                        <li>
                                            <img src="assets/images/xs/avatar3.jpg" alt="Avatar" />
                                        </li>
                                        <li>
                                            <img src="assets/images/xs/avatar4.jpg" alt="Avatar" />
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="progress-container">
                                    <span className="progress-badge">iOS Game Dev</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width: "45%"}}>
                                            <span className="progress-value">45%</span>
                                        </div>
                                    </div>
                                    <ul className="list-unstyled team-info">
                                        <li className="m-r-15"><small>Team</small></li>
                                        <li>
                                            <img src="assets/images/xs/avatar10.jpg" alt="Avatar" />
                                        </li>
                                        <li>
                                            <img src="assets/images/xs/avatar9.jpg" alt="Avatar" />
                                        </li>
                                        <li>
                                            <img src="assets/images/xs/avatar8.jpg" alt="Avatar" />
                                        </li>
                                        <li>
                                            <img src="assets/images/xs/avatar7.jpg" alt="Avatar" />
                                        </li>
                                        <li>
                                            <img src="assets/images/xs/avatar6.jpg" alt="Avatar" />
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="progress-container progress-warning">
                                    <span className="progress-badge">Home Development</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="29" aria-valuemin="0" aria-valuemax="100" style={{width: "29%"}}>
                                            <span className="progress-value">29%</span>
                                        </div>
                                    </div>
                                    <ul className="list-unstyled team-info">
                                        <li className="m-r-15"><small>Team</small></li>
                                        <li>
                                            <img src="assets/images/xs/avatar5.jpg" alt="Avatar" />
                                        </li>
                                        <li>
                                            <img src="assets/images/xs/avatar2.jpg" alt="Avatar" />
                                        </li>
                                        <li>
                                            <img src="assets/images/xs/avatar7.jpg" alt="Avatar" />
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><a href="javascript:void(0);" className="app_calendar" title="Calendar"><i className="zmdi zmdi-calendar"></i></a></li>
            <li><a href="javascript:void(0);" className="app_google_drive" title="Google Drive"><i className="zmdi zmdi-google-drive"></i></a></li>
            <li><a href="javascript:void(0);" className="app_group_work" title="Group Work"><i className="zmdi zmdi-group-work"></i></a></li>
            <li><a href="javascript:void(0);" className="js-right-sidebar" title="Setting"><i className="zmdi zmdi-settings zmdi-hc-spin"></i></a></li>
            <li><a href="sign-in.html" className="mega-menu" title="Sign Out"><i className="zmdi zmdi-power"></i></a></li>
        </ul>
    </div>
        </>
    )
}