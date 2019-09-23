export default function checkAuth() {
    return new Promise((resolve, reject) => {
        const user = localStorage.getItem('user');
        if (user) {
            resolve(user);
        } else {
            alert("Authentication");
            const person = {
                name: "test",
                email: "test@test.id",
            }
            window.localStorage.setItem('user', JSON.stringify(person));
            resolve(user);
        }
    });
}