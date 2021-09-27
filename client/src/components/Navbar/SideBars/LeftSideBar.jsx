import React from 'react';

export default function leftsidebar (){
    return (
        <>
            <aside id="leftsidebar" className="sidebar">
    <div className="navbar-brand">
        <button className="btn-menu ls-toggle-btn" type="button"><i className="zmdi zmdi-menu"></i></button>
        <a href="/"><img src="assets/images/brain.svg" width="25" alt="Aero" /><span className="m-l-10">Calibrain</span></a>
    </div>
    <div className="menu">
        <ul className="list">
            <li>
                <div className="user-info">
                    <a className="image" href="profile.html"><img src="assets/images/profile_av.jpg" alt="User" /></a>
                    <div className="detail">
                        <h4>Michael</h4>
                        <small>Super Admin</small>
                    </div>
                </div>
            </li>
            <li className="active open"><a href="index.html"><i className="zmdi zmdi-home"></i><span>Dashboard</span></a></li>
            <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-apps"></i><span>App</span></a>
                <ul className="ml-menu">
                    <li><a href="mail-inbox.html">Email</a></li>
                    <li><a href="chat.html">Chat Apps</a></li>
                    <li><a href="events.html">Calendar</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </li>
            <li> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-assignment"></i><span>Projects</span></a>
                <ul className="ml-menu">
                    <li><a href="project-list.html">Projects List</a></li>
                    <li><a href="taskboard.html">Taskboard</a></li>
                    <li><a href="ticket-list.html">Ticket List</a></li>
                    <li><a href="ticket-detail.html">Ticket Detail</a></li>
                </ul>
            </li>
            <li> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-folder"></i><span>File Manager</span></a>
                <ul className="ml-menu">
                    <li><a href="file-dashboard.html">All File</a></li>
                    <li><a href="file-documents.html">Documents</a></li>
                    <li><a href="file-images.html">Images</a></li>
                    <li><a href="file-media.html">Media</a></li>
                </ul>
            </li>
            <li> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-blogger"></i><span>Blog</span></a>
                <ul className="ml-menu">
                    <li><a href="blog-dashboard.html">Dashboard</a></li>
                    <li><a href="blog-post.html">Blog Post</a></li>
                    <li><a href="blog-list.html">List View</a></li>
                    <li><a href="blog-grid.html">Grid View</a></li>
                    <li><a href="blog-details.html">Blog Details</a></li>
                </ul>
            </li>
            <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-shopping-cart"></i><span>Ecommerce</span></a>
                <ul className="ml-menu">
                    <li><a href="ec-dashboard.html">Dashboard</a></li>
                    <li><a href="ec-product.html">Product</a></li>
                    <li><a href="ec-product-List.html">Product List</a></li>
                    <li><a href="ec-product-detail.html">Product detail</a></li>
                </ul>
            </li>
            <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-swap-alt"></i><span>Components</span></a>
                <ul className="ml-menu">
                    <li><a href="ui_kit.html">Aero UI KIT</a></li>
                    <li><a href="alerts.html">Alerts</a></li>
                    <li><a href="collapse.html">Collapse</a></li>
                    <li><a href="colors.html">Colors</a></li>
                    <li><a href="dialogs.html">Dialogs</a></li>
                    <li><a href="list-group.html">List Group</a></li>
                    <li><a href="media-object.html">Media Object</a></li>
                    <li><a href="modals.html">Modals</a></li>
                    <li><a href="notifications.html">Notifications</a></li>
                    <li><a href="progressbars.html">Progress Bars</a></li>
                    <li><a href="range-sliders.html">Range Sliders</a></li>
                    <li><a href="sortable-nestable.html">Sortable & Nestable</a></li>
                    <li><a href="tabs.html">Tabs</a></li>
                    <li><a href="waves.html">Waves</a></li>
                </ul>
            </li>
            <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-flower"></i><span>Font Icons</span></a>
                <ul className="ml-menu">
                    <li><a href="icons.html">Material Icons</a></li>
                    <li><a href="icons-themify.html">Themify Icons</a></li>
                    <li><a href="icons-weather.html">Weather Icons</a></li>
                </ul>
            </li>
            <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-assignment"></i><span>Forms</span></a>
                <ul className="ml-menu">
                    <li><a href="basic-form-elements.html">Basic Form</a></li>
                    <li><a href="advanced-form-elements.html">Advanced Form</a></li>
                    <li><a href="form-examples.html">Form Examples</a></li>
                    <li><a href="form-validation.html">Form Validation</a></li>
                    <li><a href="form-wizard.html">Form Wizard</a></li>
                    <li><a href="form-editors.html">Editors</a></li>
                    <li><a href="form-upload.html">File Upload</a></li>
                    <li><a href="form-summernote.html">Summernote</a></li>
                </ul>
            </li>
            <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-grid"></i><span>Tables</span></a>
                <ul className="ml-menu">
                    <li><a href="normal-tables.html">Normal Tables</a></li>
                    <li><a href="jquery-datatable.html">Jquery Datatables</a></li>
                    <li><a href="editable-table.html">Editable Tables</a></li>
                    <li><a href="footable.html">Foo Tables</a></li>
                    <li><a href="table-color.html">Tables Color</a></li>
                </ul>
            </li>
            <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-chart"></i><span>Charts</span></a>
                <ul className="ml-menu">
                    <li><a href="c3.html">C3 Chart</a></li>
                    <li><a href="morris.html">Morris</a></li>
                    <li><a href="flot.html">Flot</a></li>
                    <li><a href="chartjs.html">ChartJS</a></li>
                    <li><a href="sparkline.html">Sparkline</a></li>
                    <li><a href="jquery-knob.html">Jquery Knob</a></li>
                </ul>
            </li>
            <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-delicious"></i><span>Widgets</span></a>
                <ul className="ml-menu">
                    <li><a href="widgets-app.html">Apps Widgets</a></li>
                    <li><a href="widgets-data.html">Data Widgets</a></li>
                </ul>
            </li>
            <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-lock"></i><span>Authentication</span></a>
                <ul className="ml-menu">
                    <li><a href="sign-in.html">Sign In</a></li>
                    <li><a href="sign-up.html">Sign Up</a></li>
                    <li><a href="forgot-password.html">Forgot Password</a></li>
                    <li><a href="404.html">Page 404</a></li>
                    <li><a href="500.html">Page 500</a></li>
                    <li><a href="page-offline.html">Page Offline</a></li>
                    <li><a href="locked.html">Locked Screen</a></li>
                </ul>
            </li>
            <li className="open_top"><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-copy"></i><span>Sample Pages</span></a>
                <ul className="ml-menu">
                    <li><a href="blank.html">Blank Page</a></li>
                    <li><a href="image-gallery.html">Image Gallery</a></li>
                    <li><a href="profile.html">Profile</a></li>
                    <li><a href="timeline.html">Timeline</a></li>
                    <li><a href="pricing.html">Pricing</a></li>
                    <li><a href="invoices.html">Invoices</a></li>
                    <li><a href="invoices-list.html">Invoices List</a></li>
                    <li><a href="search-results.html">Search Results</a></li>
                </ul>
            </li>
            <li className="open_top"><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-map"></i><span>Maps</span></a>
                <ul className="ml-menu">
                    <li><a href="google.html">Google Map</a></li>
                    <li><a href="yandex.html">YandexMap</a></li>
                    <li><a href="jvectormap.html">jVectorMap</a></li>
                </ul>
            </li>
            <li>
                <div className="progress-container progress-primary m-t-10">
                    <span className="progress-badge">Traffic this Month</span>
                    <div className="progress">
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" style={{width: "67%"}}>
                            <span className="progress-value">67%</span>
                        </div>
                    </div>
                </div>
                <div className="progress-container progress-info">
                    <span className="progress-badge">Server Load</span>
                    <div className="progress">
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100" style={{width: "86%;"}}>
                            <span className="progress-value">86%</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</aside>

<aside id="rightsidebar" className="right-sidebar">
    <ul className="nav nav-tabs sm">
        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#setting"><i className="zmdi zmdi-settings zmdi-hc-spin"></i></a></li>
        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#chat"><i className="zmdi zmdi-comments"></i></a></li>
    </ul>
    <div className="tab-content">
        <div className="tab-pane active" id="setting">
            <div className="slim_scroll">
                <div className="card">
                    <h6>Theme Option</h6>
                    <div className="light_dark">
                        <div className="radio">
                            <input type="radio" name="radio1" id="lighttheme" value="light" checked="" />
                            <label for="lighttheme">Light Mode</label>
                        </div>
                        <div className="radio mb-0">
                            <input type="radio" name="radio1" id="darktheme" value="dark" />
                            <label for="darktheme">Dark Mode</label>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <h6>Color Skins</h6>
                    <ul className="choose-skin list-unstyled">
                        <li data-theme="purple"><div className="purple"></div></li>
                        <li data-theme="blue"><div className="blue"></div></li>
                        <li data-theme="cyan"><div className="cyan"></div></li>
                        <li data-theme="green"><div className="green"></div></li>
                        <li data-theme="orange"><div className="orange"></div></li>
                        <li data-theme="blush" className="active"><div className="blush"></div></li>
                    </ul>
                </div>
                <div className="card">
                    <h6>General Settings</h6>
                    <ul className="setting-list list-unstyled">
                        <li>
                            <div className="checkbox">
                                <input id="checkbox1" type="checkbox" />
                                <label for="checkbox1">Report Panel Usage</label>
                            </div>
                        </li>
                        <li>
                            <div className="checkbox">
                                <input id="checkbox2" type="checkbox" checked="" />
                                <label for="checkbox2">Email Redirect</label>
                            </div>
                        </li>
                        <li>
                            <div className="checkbox">
                                <input id="checkbox3" type="checkbox" checked="" />
                                <label for="checkbox3">Notifications</label>
                            </div>
                        </li>
                        <li>
                            <div className="checkbox">
                                <input id="checkbox4" type="checkbox" />
                                <label for="checkbox4">Auto Updates</label>
                            </div>
                        </li>
                        <li>
                            <div className="checkbox">
                                <input id="checkbox5" type="checkbox" checked="" />
                                <label for="checkbox5">Offline</label>
                            </div>
                        </li>
                        <li>
                            <div className="checkbox">
                                <input id="checkbox6" type="checkbox" checked="" />
                                <label for="checkbox6">Location Permission</label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="tab-pane right_chat" id="chat">
            <div className="slim_scroll">
                <div className="card">
                    <ul className="list-unstyled">
                        <li className="online">
                            <a href="javascript:void(0);">
                                <div className="media">
                                    <img className="media-object " src="assets/images/xs/avatar4.jpg" alt="" />
                                    <div className="media-body">
                                        <span className="name">Sophia <small className="float-right">11:00AM</small></span>
                                        <span className="message">There are many variations of passages of Lorem Ipsum available</span>
                                        <span className="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="online">
                            <a href="javascript:void(0);">
                                <div className="media">
                                    <img className="media-object " src="assets/images/xs/avatar5.jpg" alt="" />
                                    <div className="media-body">
                                        <span className="name">Grayson <small className="float-right">11:30AM</small></span>
                                        <span className="message">All the Lorem Ipsum generators on the</span>
                                        <span className="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="offline">
                            <a href="javascript:void(0);">
                                <div className="media">
                                    <img className="media-object " src="assets/images/xs/avatar2.jpg" alt="" />
                                    <div className="media-body">
                                        <span className="name">Isabella <small className="float-right">11:31AM</small></span>
                                        <span className="message">Contrary to popular belief, Lorem Ipsum</span>
                                        <span className="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="me">
                            <a href="javascript:void(0);">
                                <div className="media">
                                    <img className="media-object " src="assets/images/xs/avatar1.jpg" alt="" />
                                    <div className="media-body">
                                        <span className="name">John <small className="float-right">05:00PM</small></span>
                                        <span className="message">It is a long established fact that a reader</span>
                                        <span className="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="online">
                            <a href="javascript:void(0);">
                                <div className="media">
                                    <img className="media-object " src="assets/images/xs/avatar3.jpg" alt=""  />
                                    <div className="media-body">
                                        <span className="name">Alexander <small className="float-right">06:08PM</small></span>
                                        <span className="message">Richard McClintock, a Latin professor</span>
                                        <span className="badge badge-outline status"></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</aside>
        </>
    )
}