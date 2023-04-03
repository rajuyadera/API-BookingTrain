import React from "react";

const Header = () => {
  return (
    <>
      <aside
        class="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 "
        id="sidenav-main"
      >
        <div class="sidenav-header">
          <i
            class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
            aria-hidden="true"
            id="iconSidenav"
          ></i>
          <a
            class="navbar-brand m-0"
            href=" https://demos.creative-tim.com/argon-dashboard/pages/dashboard.html "
            target="_blank"
          >
            <img
              src="../assets/img/logo-ct-dark.png"
              class="navbar-brand-img h-100"
              alt="main_logo"
            />
            <span class="ms-1 font-weight-bold">Admin Booking</span>
          </a>
        </div>
        <hr class="horizontal dark mt-0" />
        <div
          class="collapse navbar-collapse  w-auto "
          id="sidenav-collapse-main"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link " href="/users">
                <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="fa fa-user text-primary text-sm opacity-10"></i>
                </div>
                <span class="nav-link-text ms-1">Users</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/stations">
                <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="fa fa-train text-success text-sm opacity-10"></i>
                </div>
                <span class="nav-link-text ms-1">Train</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/rute">
                <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="fa fa-map-marker text-success text-sm opacity-10"></i>
                </div>
                <span class="nav-link-text ms-1">Rute</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/order">
                <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="fa fa-shopping-cart text-success text-sm opacity-10"></i>
                </div>
                <span class="nav-link-text ms-1">Order</span>
              </a>
            </li>

            <li class="nav-item mt-3">
              <h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">
                Account pages
              </h6>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/">
                <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i
                    class="fa fa-sign-out text-dark text-sm opacity-10"
                    aria-hidden="true"
                  ></i>
                </div>
                <span class="nav-link-text ms-1">Logout</span>
              </a>
            </li>
            
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Header;
