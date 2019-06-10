import Header from './Header';
const layoutStyle1 = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

const layoutStyle2 = {
    margin: 20,
    padding: 20,
    border: '1px solid RED'
}

const Layout = props => (
    <div style={layoutStyle1}>
      <Header />
      {props.children}
    </div>
  );
export default Layout;

const Layout2 = Page =>{
    return()=>(
        <div style={layoutStyle2}>
        <Header />
        <Page />
      </div> 
    );
}
// export default Layout2;

