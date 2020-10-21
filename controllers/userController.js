import routes from "../routes";

// Gloval
export const getJoin = (req, res) => {
    res.render("Join", {pageTitle:"Join"});
};
export const postJoin = (req, res) =>{
    const {
        body:{
            name, email, password, password2
        }
    } = req;
    if(password !== password2){
        res.status(400);
        res.render("Join", {pageTitle:"Join"});
    } else {
        // To do :: Register User
        // To do :: Log User In
        res.redirect(routes.home);
    }
}
export const login = (req, res) => res.render("Login",{pageTitle:"Login"});
export const logout = (req, res) => res.send("Logout");
//Users
export const userDetail = (req, res) => res.send("User Detail");
export const editProfile = (req, res) => res.render("editProfile",{pageTitle:"Edit Profile"});
export const changePassword = (req, res) => res.render("changePassword",{pageTitle:"Change Password"});