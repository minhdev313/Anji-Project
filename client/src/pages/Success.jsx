import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const SuccessPayment = () => {
    const { currentUser } = useSelector((state) => state.user);
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        console.log('Current User ID:', currentUser._id); // Log currentUser._id here

        if (currentUser && currentUser._id) {
            upgradeUserToPremium();
        }
    }, [currentUser]);

    const upgradeUserToPremium = async () => {
        try {
            const response = await fetch(`/api/user/level/${currentUser._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('User upgraded to Premium:', data);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    useEffect(() => {
        // Set timeout to redirect to home page after 5 seconds
        const timeoutId = setTimeout(() => {
            handleRedirect();
        }, 5000);

        // Countdown timer
        const countdownInterval = setInterval(() => {
            setCountdown((prevCount) => {
                if (prevCount === 1) {
                    clearInterval(countdownInterval);
                    handleRedirect();
                }
                return prevCount - 1;
            });
        }, 1000);

        // Cleanup functions
        return () => {
            clearTimeout(timeoutId);
            clearInterval(countdownInterval);
        };
    }, []);

    const handleRedirect = () => {
        window.location.href = '/';
    };

    return (
        <div
            style={{
                fontFamily: 'Arial, sans-serif',
                backgroundImage:
                    'url("https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/442483382_122147795642188285_5559272941821391756_n.png?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEY7vLLMfg8T9YBSuezB-6cPCeTzxnMFvw8J5PPGcwW_PtccsYa3Wkw_2pC_kJuJoi9PrxI-tBimBQLyVoevvoT&_nc_ohc=yov1pHbnM3IQ7kNvgFEaK5f&_nc_ht=scontent.fdad3-6.fna&oh=00_AYB2mOMTt9Uvt7FCyNIpSg7D9YCZPNvRT4lW5ed9MRM7_g&oe=66721F75")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 0,
            }}
        >
            <div
                className="checkout"
                style={{
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    padding: '20px',
                    width: '400px',
                    textAlign: 'center',
                }}
            >
                <div
                    className="logo"
                    style={{
                        marginBottom: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img
                        src="https://i.pinimg.com/736x/7f/1a/69/7f1a69a7fa1d96b28eb22620960da2be.jpg"
                        alt="Logo"
                        style={{ width: '150px' }}
                    />
                </div>
                <div className="product" style={{ marginBottom: '20px' }}>
                    <p style={{ margin: 0, padding: '5px 0' }}>
                        <strong style={{ fontWeight: 'bold', color: '#333', fontSize: '24px' }}>
                            Thanh toán thành công
                        </strong>
                    </p>
                </div>
                <button
                    onClick={handleRedirect}
                    style={{
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '15px 20px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        transition: 'background-color 0.3s ease',
                    }}
                >
                    Trở về trang chủ ({countdown})
                </button>
                {countdown === 0 && (
                    <p style={{ marginTop: '20px', color: '#555' }}>Đang chuyển hướng về trang chủ...</p>
                )}
            </div>
        </div>
    );
};

export default SuccessPayment;
