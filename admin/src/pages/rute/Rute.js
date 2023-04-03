import React from "react";

export default function Rute() {
  return (
    <>
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
                  <h6>Table Siswa</h6>
                </div>
                <div class="card-body px-0 pt-0 pb-2">
                  <div class="table-responsive p-0">
                    <table class="table align-items-center mb-0">
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
                        {siswas.map((siswa, index) => (
                          <tr key={index}>
                            <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <p class="mb-0 text-sm">{index + 1}</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div class="d-flex px-2 py-1">
                                <div class="d-flex flex-column justify-content-center">
                                  <p class="mb-0 text-sm">{siswa.nama}</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p class="text-xs font-weight-bold mb-0">
                                {siswa.email}
                              </p>
                            </td>
                            <td class="align-middle text-center text-sm">
                              <span class="badge badge-sm bg-gradient-success">
                                {siswa.alamat}
                              </span>
                            </td>
                            <td class="align-middle text-center">
                              <span class="text-secondary text-xs font-weight-bold">
                                {siswa.noTelp}
                              </span>
                            </td>
                            <td class="align-middle">
                              <Link
                                class="text-secondary font-weight-bold text-xs ps-2"
                              >
                                Edit
                              </Link>
                              <Link
                                class="text-secondary font-weight-bold text-xs ps-2"
                              >
                                Delete
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p class="text-xs font-weight-bold mb-0 ms-3">
                    Total Rows : 2 Page : 2 of 2
                  </p>
                  <nav aria-label="Page navigation example">
                    
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
