import React, { useState, useEffect } from "react";

const Socket = () => {
    const [data, setData] = useState([]); // Stores the incoming data
    const [connected, setConnected] = useState(false); // Tracks connection status
    const [isDarkMode, setIsDarkMode] = useState(false); // Tracks theme mode

    useEffect(() => {
        // Connect to the Binance WebSocket API for real-time updates (e.g., BTC/USDT price)
        const socket = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

        // Update connection status
        socket.onopen = () => {
            setConnected(true);
            console.log("Connected to Binance WebSocket API");
        };

        // Listen for updates from the server
        socket.onmessage = (event) => {
            // Parse the incoming message
            const newData = JSON.parse(event.data);
            const price = newData.p; // Extract price data
            const timestamp = newData.T; // Extract timestamp

            // Prepend new data to the list (so it appears at the top of the table)
            setData((prevData) => [{ price, timestamp }, ...prevData]);
        };

        // Handle disconnection
        socket.onclose = () => {
            setConnected(false);
            console.log("Disconnected from WebSocket API");
        };

        socket.onerror = (error) => {
            console.error("WebSocket error:", error);
        };

        // Cleanup when the component unmounts
        return () => {
            socket.close();
        };
    }, []);

    // Toggle dark/light theme
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`container ${isDarkMode ? "dark-theme" : "light-theme"}`}>
            <h1 className="title">Real-Time Data with Binance WebSocket</h1>
            <p>Status: {connected ? "Connected" : "Disconnected"}</p>
            {/* Button Wrapper to position button */}
            <div className="button-wrapper">
                <button onClick={toggleTheme}>
                    Switch to {isDarkMode ? "Light" : "Dark"} Mode
                </button>
            </div>

            {/* Table to display the real-time data */}
            <table>
                <thead>
                <tr>
                    <th>Price (USD)</th>
                    <th>Time</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.price} USD</td>
                        <td>{new Date(item.timestamp).toLocaleString()}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Socket;
