import styles from './layout.module.css'

// export default function layout({ children }) {
//   return (
//     <div className={styles.container}>
//       {children}
//     </div>
//   );
// }

export default function Layout({ children }) {
    return <div className={styles.container}>{children}</div>
  }
  