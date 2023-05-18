import React from 'react'

const Table = ({data,heading}) => {
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">{heading}</h4>

                            <div className="table-responsive">
                                <table className="table mb-0">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Brand</th>
                                            <th>category</th>
                                            <th>Description</th>
                                            <th>Material</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            data.map( (doc,index)=>{
                                                return <tr key={index}>
                                            <th scope="row" >{index+1}</th>
                                            <td>{doc.name}</td>
                                            <td>{doc.brand}</td>
                                            <td>{doc.categoryType}</td>
                                            <td>{doc.description}</td>
                                            <td>{doc.material}</td>
                                            <td>Rs=/{doc.price}</td>
                                        </tr>
                                            })
                                        }


                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table
