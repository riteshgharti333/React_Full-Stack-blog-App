import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className="headerTitleSm">Rect & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg"
       src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
       alt="" />
    </div>
  )
}
