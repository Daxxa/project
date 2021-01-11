const getElementByClass = className => document.getElementsByClassName(className)[0];

const getElementsByClass = className => [...document.getElementsByClassName(className)];

const onSubmitBook = () => {
    const form = document.forms["bookForm"];
    const bookTitle = form["bookTitle"].value;
    const bookFile = form["bookFile"].value;
    const programName = form["programName"].value;
    const methodName = form["methodName"].value;
    const userName = form["userName"].value;
    const userPassword = form["userPassword"].value;

    if (!bookTitle.length) {
        alert("Write book title !");
        event.preventDefault();
        return false;
    }
    const allowedTypes = ['pdf', 'txt', 'doc', 'fb2'];
    const bookFileExt = bookFile.substr(bookFile.lastIndexOf('.') + 1);
    if (!allowedTypes.includes(bookFileExt)) {
        alert("Wrong file extension ! Allowed extensions 'pdf', 'txt', 'doc', 'fb2' ");
        event.preventDefault();
        return false;
    }

    if (!programName.length) {
        alert("Write program name !");
        event.preventDefault();
        return false;
    }

    if (!methodName.length) {
        alert("Choose a method !");
        event.preventDefault();
        return false;
    }

    if (!userPassword.length) {
        alert("Write the user password !");
        event.preventDefault();
        return false;
    }

    if (userPassword.length < 6) {
        alert("The user password must be longer than 6 characters !");
        event.preventDefault();
        return false;
    }
};
