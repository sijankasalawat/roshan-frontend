import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';

import { createLicenseApi, getAllLicenseApi } from "../apis/Api";
import Navbar from "../components/Navbar";

export const Dashboard = () => {
    const [licenseName, setLicenseName] = useState("");
    const [licenseImage, setLicenseImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const handleImage = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setLicenseImage(file);
        setPreviewImage(URL.createObjectURL(file));
    };

    const [license, setLicense] = useState([]);
    useEffect(() => {
        getAllLicenseApi().then((res) => {
            setLicense(res.data.license);
        });
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("licenseName", licenseName);
        formData.append("licenseImageUrl", licenseImage);

        createLicenseApi(formData).then((res) => {
            if (res.data.success == false) {
                toast.error(res.data.message);
            } else {
                toast.success(res.data.message);
            }
        })
            .catch((err) => {
                console.log(err);
                toast.error("Internal Server Error");
            });
    };
    return (
        <>
        <Navbar/>
            <div className="m-4">
                <div className="d-flex justify-content-between">
                    <h1>Dashbard</h1>
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                    >
                        Add License
                    </button>
                    <div
                        className="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                                        Add Licemse
                                    </h1>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    {/* Name, Description , price , Catagory(Select), Image */}
                                    <label>License Number</label>
                                    <input
                                        onChange={(e) => {
                                            setLicenseName(e.target.value);
                                        }}
                                        className="form-control"
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="Enter License number"
                                    />
                                    <label>License Image</label>
                                    <input
                                        onChange={handleImage}
                                        className="form-control"
                                        type="file"
                                        name=""
                                        id=""
                                    />
                                    {/* Preview Image */}
                                    {previewImage && <img src={previewImage} className="" />}
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button
                                        onClick={handleSubmit}
                                        type="button"
                                        className="btn btn-primary"
                                    >
                                        Save changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 
          make table
           */}
                <table className="table mt-2">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">License Image</th>
                            <th scope="col">License Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
              license.map((item) => (
                <tr>
                  <td>
                    <img
                      src={item.licenseImageUrl}
                      height={100}
                      width={80}
                    />
                  </td>
                  {/* <td>{item.licenseName}</td>
                  <td>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <Link to={`/admin/edit/${item._id}`} type="button" className="btn btn-success">
                        Edit
                      </Link>
                      <button onClick={() => handleDelete(item._id)} type="button" className="btn btn-danger">
                        Delete
                      </button>
                    </div>
                  </td> */}
                </tr>
              ))
            }
                    </tbody>
                </table>
            </div>
        </>
    );
};
