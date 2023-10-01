// import React from 'react';
// import { useSelector } from 'react-redux';



// function CategoryList() {

//   const categoryItems = useSelector(state => state.clist.value);

//   return (
    
//     <div className="container mt-4 ">
//       <h2 className="mb-4 text-center">Explore Our Services</h2>
//       <div className="row">
//         {categoryItems.map(item => (
//           <div key={item.id} className="col-md-4 mb-4">
//             <div className="card border-0 shadow-sm  card bg-light">
//               <div className="card-img-container" style={{ height: '200px', overflow: 'hidden' }}>
//                 <img src={item.itemImage} className="card-img-top" alt={item.itemName} style={{ height: '100%', objectFit: 'cover' }} />
//               </div>
//               <div className="card-body">
//                 <h6 className="card-title text-center">{item.itemName}</h6>
//                 <p className="card-text text-center">${item.price}</p>
//                 <div className="text-center">
//                   <button className="btn btn-primary btn-sm">Book Service</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
    
//   );
// }

// export default CategoryList;


import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CategoryList() {
  const categoryItems = useSelector(state => state.clist.value);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Explore Our Services</h2>
      <div className="row">
        {categoryItems.map(category => (
          <div  className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm  card bg-light">
              <div className="card-img-container" style={{ height: '200px', overflow: 'hidden' }}>
                <img src={category.itemImage} className="card-img-top" alt={category.itemName} style={{ height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="card-body">
                <h6 className="card-title text-center">{category.itemName}</h6>
                <p className="card-text text-center">${category.price}</p>
                <div className="text-center">
                {/* <Link to={`/category/${categoryId}`}>View Category Details</Link> */}

                  <Link to={`/category/${category.id}`} className="btn btn-primary btn-sm">View Details</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;

// // key={category.id}

// "status": true,
// "data": {
//     "id": 93,
//     "itemImage": "http://apps.codebetter.in:8082/quickserve/uploads/97b31b36-59ca-447c-b5be-64d7624dd02d.jpg",
//     "itemName": "Mivi Roam 2 Bluetooth 5W Portable Speaker",
//     "description": "Sound Compatibility Issue",
//     "price": 11999,
//     "createdAt": "2023-09-01T12:26:47.000Z",
//     "updatedAt": "2023-09-01T12:26:47.000Z",
//     "serviceTypeId": 253,
//     "serviceType": {
//         "id": 253,
//         "serviceType": "Bluetooth Speaker",
//         "createdAt": "2023-08-31T16:47:48.000Z",
//         "updatedAt": "2023-08-31T16:47:48.000Z"
//     }
// },
// "msg": "Itm successfully found..!",
// "error": null
// }