import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateSiswa = () => {
  const [trainCode, settrainCode] = useState("");
  const [name, setName] = useState("");
  const [carriage, setCarriage] = useState("");
  const [seat, setSeat] = useState("");
  const [idClass, setIdClass] = useState("");
  const [msg, setMsg] = useState("")

  const Create = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/train", {
        train_code: trainCode,
        name: name,
        carriage: carriage,
        seat: seat,
        id_class: idClass
      });
      toast(response.data.msg, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      setMsg(error.response.data.msg);
    }
  };
  return (
    <>
      <div class="jet-index min-height-300 bg-primary position-absolute w-100"></div>
      <main class="main-content position-relative border-radius-lg ">
        <div class="container py-4">
          <div class="row">
            <div class="col-8 text-center">
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
                  <h6>Add Train</h6>
                </div>
                <div className="mt-4 aligns-item-center">
                  <div class="table-responsive p-0 aligns-item-center">
                    <div className="aligns-item-center">
                      <div class="card-body px-0 pt-0 pb-2 aligns-item-center">
                        <form onSubmit={Create} className="aligns-item-center text-center">
                          <div class="col-md-6 ">
                            <div class="form-group ">
                              <input
                                type="text"
                                class="form-control form-control-alternative "
                                id="exampleFormControlInput1"
                                value={trainCode}
                                onChange={(e) => settrainCode(e.target.value)}
                                placeholder="Train Code"
                              />
                            </div>
                          </div>
                          <div class="col-6 aligns-item-center">
                            <div class="form-group">
                              <input
                                type="email"
                                class="form-control form-control-alternative align-center"
                                id="exampleFormControlInput1"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name Train"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <input
                                type="number"
                                class="form-control form-control-alternative"
                                id="exampleFormControlInput1"
                                value={idClass}
                                onChange={(e) => setIdClass(e.target.value)}
                                placeholder="Class"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control form-control-alternative"
                                id="exampleFormControlInput1"
                                value={carriage}
                                onChange={(e) => setCarriage(e.target.value)}
                                placeholder="carriage"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <input
                                type="number"
                                class="form-control form-control-alternative"
                                id="exampleFormControlInput1"
                                value={seat}
                                onChange={(e) => setSeat(e.target.value)}
                                placeholder="Seat"
                              />
                            </div>
                          </div>
                          <input
                            type="submit"
                            class="btn btn-outline-info"
                            value="Create"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CreateSiswa;
