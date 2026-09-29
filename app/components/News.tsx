// import { NEWSS } from "../utils/data"
// import { motion} from "framer-motion";

// const RoomCard = ({
//   room,
//   onBook,
// }: {
//   room: Product;
//   onBook: (r: Product) => void;
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
//     >
//       <div className="relative h-72 overflow-hidden">
//         <img
//           src={room.image}
//           alt={room.name}
//           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//         />
//         <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-amber-600 uppercase tracking-wider">
//           Premium
//         </div>
//       </div>
//       <div className="p-8">
//         <div className="flex justify-between items-start mb-4">
//           <div>
//             <h3 className="text-2xl font-serif text-slate-900 mb-1">
//               {room.name}
//             </h3>
//             <div className="flex items-center text-slate-500 text-sm gap-4">
//               <span className="flex items-center gap-1">
//                 <Users size={14} /> {room.capacity}
//               </span>
//             </div>
//           </div>
//         </div>

//         <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
//           {room.description}
//         </p>

//         <div className="flex flex-wrap gap-2 mb-8">
//           {room.amenities.map((am, i) => (
//             <span
//               key={i}
//               className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1 rounded-full"
//             >
//               {am}
//             </span>
//           ))}
//         </div>

//         <div className="flex items-end justify-between border-t pt-6 border-slate-100">
//           <div>
//             <p className="text-slate-400 text-xs mb-1 uppercase tracking-wider">
//               Price
//             </p>
//             <p className="text-3xl font-bold text-slate-900">
//               ₦{room.price.toLocaleString()}
//             </p>
//           </div>
//           <button
//             onClick={() => onBook(room)}
//             className="bg-slate-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-slate-800 transition-colors"
//           >
//             Book Now
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };


// export const News = () => {
//   return (
//     <section id="suites" className="py-24 px-6 max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <span className="text-amber-500 font-medium tracking-widest uppercase text-sm">
//             INSTRUMENTS
//           </span>
//           <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-3 mb-6">
//             Designed for Precision
//           </h2>
//           <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">
//             Our advanced surveying instruments are designed to deliver unmatched
//             precision, reliability, and efficiency in the field.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {NEWSS.map((product) => (
//             <RoomCard key={product.id} room={product} />
//           ))}
//         </div>
//       </section>
//   )
// }
