/* styles.css */

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
}

form {
    max-width: 600px;
    margin: auto;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

form label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
}

form input[type="text"],
form input[type="date"],
form input[type="email"],
form input[type="tel"],
form select {
    width: calc(100% - 12px);
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 14px;
}

form select {
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
}

form label[for="country"] {
    margin-top: 10px;
}

form label[for="gender"] {
    display: inline-block;
    margin-right: 10px;
}

form button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
}

form button:last-child {
    margin-right: 0;
    background-color: #f44336;
}

#popup {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border: 1px solid #ccc;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    max-width: 80%;
    z-index: 9999;
}

#popup h2 {
    margin-top: 0;
}

#popupContent div {
    margin-bottom: 10px;
}

#popupContent div strong {
    margin-right: 10px;
}
