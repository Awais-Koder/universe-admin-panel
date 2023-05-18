import React from 'react'

const Form = () => {
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Add products</h4>
                            <div className="row mb-3">
                                <label for="example-text-input" className="col-sm-2 col-form-label">Product name</label>
                                <div className="col-sm-10">
                                    <input className="form-control" type="text" placeholder="Enter Name" id="example-text-input" name='name' />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="example-color-input" className="col-sm-2 col-form-label">Select Color</label>
                                <div className="col-sm-10">
                                    <input type="color" className="form-control form-control-color w-100" id="example-color-input" value="#0f9cf3" title="Choose your color" name='color'/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="example-text-input" className="col-sm-2 col-form-label">Product size</label>
                                <div className="col-sm-10">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <div>
                                                        <div className="form-check mb-3">
                                                            <input className="form-check-input size" type="checkbox" id="formCheck1" name='extraSmall' value='XS'/>
                                                            <label className="form-check-label" for="formCheck1">
                                                                Extra Small
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input size" type="checkbox" id="formCheck2" name='large' value='L'/>
                                                            <label className="form-check-label" for="formCheck2">
                                                                Large
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 ms-auto">
                                                    <div className="mt-4 mt-lg-0">
                                                        <div>
                                                            <div className="form-check form-check-right mb-3">
                                                                <input className="form-check-input size" type="checkbox" id="formCheckRight1" name='small' value='S'/>
                                                                <label className="form-check-label" for="formCheckRight1">
                                                                    Small
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="form-check form-check-right">
                                                                <input className="form-check-input size" type="checkbox" id="formCheckRight2" name='extraLarge' value='XL'/>
                                                                <label className="form-check-label" for="formCheckRight2">
                                                                    Extra Large
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="example-text-input" className="col-sm-2 col-form-label" >Product brand</label>
                                <div className="col-sm-10">
                                    <input className="form-control" type="text" placeholder="Enter Brand" id="example-text-input" name='brand'/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="example-text-input" className="col-sm-2 col-form-label">Product description</label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" type="text" placeholder="Enter Description" id="example-text-input" name='description' />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="example-text-input" className="col-sm-2 col-form-label">Product material</label>
                                <div className="col-sm-10">
                                    <input className="form-control" type="text" placeholder="Enter Material Name" id="example-text-input" name='material' />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="example-text-input" className="col-sm-2 col-form-label">Product price</label>
                                <div className="col-sm-10">
                                    <input className="form-control" type="text" placeholder="Enter Price" id="example-text-input" name='price'/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="example-text-input" className="col-sm-2 col-form-label">Product quantity</label>
                                <div className="col-sm-10">
                                    <input className="form-control" type="number" placeholder="Enter quantity" id="example-text-input" name='quantity' min='1'/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="example-text-input" className="col-sm-2 col-form-label">Product image</label>
                                <div className="col-sm-10">
                                    <input className="form-control" type="file" placeholder="Enter Quantity" id="example-text-input" name='image'/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">Select category</label>
                                <div className="col-sm-10">
                                    <select className="form-select" aria-label="Default select example" name='category'>
                                        <option selected disabled>--choose one category--</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <button type="button" className="btn btn-primary waves-effect waves-light">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
