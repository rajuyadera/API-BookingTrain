import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import { getStation } from "../../api/station/station";

const Station = () => {


  return (
    <div>
      <div class="jet-index min-height-300 bg-primary position-absolute w-100"></div>
      <main class="main-content position-relative border-radius-lg ">
        <div class="container py-4">
          <div class="row ">
            <div class="col-8">
              <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
              <div class="card mb-4">
                <div class="card-header pb-0 text-center">
                  <h6>Table Station</h6>
                </div>
                <div class="card-body px-0 pt-0 pb-2">
                  <div class="table-responsive ">
                    <table class="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th class="text-center  text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-5">
                            No.
                          </th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-5">
                            Code
                          </th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-5">
                            Name
                          </th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-5">
                            City
                          </th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps5">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <div class="d-flex flex-column justify-content-center">
                                <p class="mb-0 text-sm"></p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-xs font-weight-bold mb-0"></p>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="badge badge-sm bg-gradient-success"></span>
                          </td>
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold"></span>
                          </td>
                          <td class="align-middle text-center">
                            <Link
                              to={`/edittrain/`}
                              class="text-secondary font-weight-bold text-xs ps-2"
                            >
                              Edit
                            </Link>
                            <Link class="text-secondary font-weight-bold text-xs ps-2">
                              Delete
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p class="text-xs font-weight-bold mb-0 ms-3">
                    Total Rows : 2 Page : of
                  </p>
                  <nav aria-label="Page navigation example">
                    <ReactPaginate
                      activeLinkClassName="active"
                      containerClassName="pagination justify-content-center"
                      previousClassName="page-item"
                      previousLinkClassName="page-link fa fa-angle-left"
                      previousLabel=""
                      nextClassName="page-item"
                      nextLinkClassName="page-link fa fa-angle-right"
                      nextLabel=""
                      pageClassName="page-item"
                      pageLinkClassName="page-link"
                    />
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <main class="main-content position-relative border-radius-lg bg-primary">
        <div class="container py-4">
          <div class="row ">
            <div class="col-8">
              <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
              <div class="card mb-4 ">
                <div class="card-header pb-0 text-center">
                  <h6>Table Train</h6>
                </div>
                <div class="card-body px-0 pt-0 pb-2 ">
                  <div class="table-responsive p-0">
                    <table class="table align-items-center mb-0 ">
                      <thead>
                        <tr>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            No.
                          </th>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Nama
                          </th>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            Email
                          </th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Alamat
                          </th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            NoTelp
                          </th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <div class="d-flex flex-column justify-content-center">
                                <p class="mb-0 text-sm"></p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="d-flex px-2 py-1">
                              <div class="d-flex flex-column justify-content-center">
                                <p class="mb-0 text-sm"></p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p class="text-xs font-weight-bold mb-0"></p>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="badge badge-sm bg-gradient-success"></span>
                          </td>
                          <td class="align-middle text-center">
                            <span class="text-secondary text-xs font-weight-bold"></span>
                          </td>
                          <td class="align-middle">
                            <Link
                              to={`/edittrain/`}
                              class="text-secondary font-weight-bold text-xs ps-2"
                            >
                              Edit
                            </Link>
                            <Link class="text-secondary font-weight-bold text-xs ps-2">
                              Delete
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p class="text-xs font-weight-bold mb-0 ms-3">
                    Total Rows : 2 Page : of
                  </p>
                  <nav aria-label="Page navigation example">
                    <ReactPaginate
                      activeLinkClassName="active"
                      containerClassName="pagination justify-content-center"
                      previousClassName="page-item"
                      previousLinkClassName="page-link fa fa-angle-left"
                      previousLabel=""
                      nextClassName="page-item"
                      nextLinkClassName="page-link fa fa-angle-right"
                      nextLabel=""
                      pageClassName="page-item"
                      pageLinkClassName="page-link"
                    />
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Station;
