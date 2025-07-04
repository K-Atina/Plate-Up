import React, { useState, useEffect } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [strengthClass, setStrengthClass] = useState("");

  useEffect(() => {

    const createParticle = () => {
      const particle = document.createElement("div");
      particle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: 9df0db
        border-radius: 75%;
        pointer-events: none;
        z-index: 1;
        left: ${Math.random() * 100}vw;
        top: 100%;
        animation: floatUp ${3 + Math.random() * 4}s linear forwards;
      `;
      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 7000);
    };

    const interval = setInterval(createParticle, 500);
    return () => clearInterval(interval);
  }, []);

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    switch (strength) {
      case 1:
      case 2:
        return "weak";
      case 3:
        return "fair";
      case 4:
        return "good";
      case 5:
        return "strong";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "password") {
      setStrengthClass(calculatePasswordStrength(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Account created successfully!");
  };

  const simulateAuthAction = (provider) => {
    alert(`Redirecting to ${provider} authentication...`);
  };

  const getStrengthColor = (strength) => {
    switch (strength) {
      case "weak": return "#ff4757";
      case "fair": return "#ffa502";
      case "good": return "#2ed573";
      case "strong": return "#5b86e5";
      default: return "transparent";
    }
  };

  const getStrengthWidth = (strength) => {
    switch (strength) {
      case "weak": return "25%";
      case "fair": return "50%";
      case "good": return "75%";
      case "strong": return "100%";
      default: return "0%";
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#9df0db",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{
        background: "white",
        backdropFilter: "blur(20px)",
        borderRadius: "24px",
        padding: "40px",
        width: "100%",
        maxWidth: "480px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.2)",
        border: "1px solid rgba(0, 0, 0, 0.2)",
        position: "relative",
        overflow: "hidden",
        animation: "slideIn 0.8s ease-out",
        zIndex: 2
      }}>
        {/* Shimmer effect */}
        <div style={{
          content: '""',
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background: "linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
          transform: "rotate(45deg)",
          animation: "shimmer 3s ease-in-out infinite",
          pointerEvents: "none"
        }}></div>

        {/* Logo */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          textAlign: "center",
          marginBottom: "30px",
          position: "relative",
          zIndex: 2
        }}>
          <div style={{
            color: "#28e28b",
            fontWeight: 700,
            fontSize: "2.2rem"
          }}>
            PLATE UP
          </div>
          <div style={{
            width: "60px",
            height: "60px",
            background: "#39edc0",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "30px",
            animation: "pulse 2s ease-in-out infinite"
          }}>
            <img src='/Logo.png'/>
          </div>
        </div>

        <h1 style={{
          textAlign: "center",
          color: "black",
          fontSize: "32px",
          fontWeight: 700,
          marginBottom: "40px",
          textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
          position: "relative",
          zIndex: 2
        }}>
          SIGN UP
        </h1>

        <div onSubmit={handleSubmit}>
          {/* Name Row */}
          <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
            <div style={{ flex: 1 }}>
              <label style={{
                display: "block",
                color: "rgba(0, 0, 0, 0.9)",
                fontSize: "14px",
                fontWeight: 500,
                marginBottom: "8px"
              }}>
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                required
                placeholder="Enter your first name"
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "16px 20px",
                  border: "2px solid rgba(0, 0, 0, 0.2)",
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "black",
                  fontSize: "16px",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)",
                  outline: "none"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#00d4ff";
                  e.target.style.background = "rgba(255, 255, 255, 0.15)";
                  e.target.style.boxShadow = "0 0 0 4px rgba(0, 212, 255, 0.2), 0 8px 25px rgba(0, 212, 255, 0.3)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(0, 0, 0, 0.2)";
                  e.target.style.background = "rgba(255, 255, 255, 0.1)";
                  e.target.style.boxShadow = "none";
                  e.target.style.transform = "translateY(0)";
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{
                display: "block",
                color: "rgba(0, 0, 0, 0.9)",
                fontSize: "14px",
                fontWeight: 500,
                marginBottom: "8px"
              }}>
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                required
                placeholder="Enter your last name"
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "16px 20px",
                  border: "2px solid rgba(0, 0, 0, 0.2)",
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "black",
                  fontSize: "16px",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)",
                  outline: "none"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#00d4ff";
                  e.target.style.background = "rgba(255, 255, 255, 0.15)";
                  e.target.style.boxShadow = "0 0 0 4px rgba(0, 212, 255, 0.2), 0 8px 25px rgba(0, 212, 255, 0.3)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(0, 0, 0, 0.2)";
                  e.target.style.background = "rgba(255, 255, 255, 0.1)";
                  e.target.style.boxShadow = "none";
                  e.target.style.transform = "translateY(0)";
                }}
              />
            </div>
          </div>

          {/* Email */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{
              display: "block",
              color: "rgba(0, 0, 0, 0.9)",
              fontSize: "14px",
              fontWeight: 500,
              marginBottom: "8px"
            }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "16px 20px",
                border: "2px solid rgba(0, 0, 0, 0.2)",
                borderRadius: "12px",
                background: "rgba(255, 255, 255, 0.1)",
                color: "black",
                fontSize: "16px",
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)",
                outline: "none"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#00d4ff";
                e.target.style.background = "rgba(255, 255, 255, 0.15)";
                e.target.style.boxShadow = "0 0 0 4px rgba(0, 212, 255, 0.2), 0 8px 25px rgba(0, 212, 255, 0.3)";
                e.target.style.transform = "translateY(-2px)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(0, 0, 0, 0.2)";
                e.target.style.background = "rgba(255, 255, 255, 0.1)";
                e.target.style.boxShadow = "none";
                e.target.style.transform = "translateY(0)";
              }}
            />
          </div>

          {/* Password Row */}
          <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
            <div style={{ flex: 1 }}>
              <label style={{
                display: "block",
                color: "rgba(0, 0, 0, 0.9)",
                fontSize: "14px",
                fontWeight: 500,
                marginBottom: "8px"
              }}>
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="Create password"
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "16px 20px",
                  border: "2px solid rgba(0, 0, 0, 0.2)",
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "black",
                  fontSize: "16px",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)",
                  outline: "none"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#00d4ff";
                  e.target.style.background = "rgba(255, 255, 255, 0.15)";
                  e.target.style.boxShadow = "0 0 0 4px rgba(0, 212, 255, 0.2), 0 8px 25px rgba(0, 212, 255, 0.3)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(0, 0, 0, 0.2)";
                  e.target.style.background = "rgba(255, 255, 255, 0.1)";
                  e.target.style.boxShadow = "none";
                  e.target.style.transform = "translateY(0)";
                }}
              />
              <div style={{
                height: "4px",
                background: "rgba(0, 0, 0, 0.2)",
                borderRadius: "2px",
                marginTop: "8px",
                overflow: "hidden",
                position: "relative"
              }}>
                <div style={{
                  height: "100%",
                  width: getStrengthWidth(strengthClass),
                  background: getStrengthColor(strengthClass),
                  borderRadius: "2px",
                  transition: "all 0.3s ease"
                }}></div>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <label style={{
                display: "block",
                color: "rgba(0, 0, 0, 0.9)",
                fontSize: "14px",
                fontWeight: 500,
                marginBottom: "8px"
              }}>
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                required
                placeholder="Confirm your password"
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "16px 20px",
                  border: "2px solid rgba(0, 0, 0, 0.2)",
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "black",
                  fontSize: "16px",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)",
                  outline: "none"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#00d4ff";
                  e.target.style.background = "rgba(255, 255, 255, 0.15)";
                  e.target.style.boxShadow = "0 0 0 4px rgba(0, 212, 255, 0.2), 0 8px 25px rgba(0, 212, 255, 0.3)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(0, 0, 0, 0.2)";
                  e.target.style.background = "rgba(255, 255, 255, 0.1)";
                  e.target.style.boxShadow = "none";
                  e.target.style.transform = "translateY(0)";
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "16px",
              border: "none",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s ease",
              marginBottom: "15px",
              position: "relative",
              overflow: "hidden",
              zIndex: 2,
              background: "#41ecc2",
              color: "black",
              boxShadow: "0 4px 15px rgba(65, 236, 194, 0.4)"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 8px 25px rgba(65, 236, 194, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(65, 236, 194, 0.4)";
            }}
          >
            Create Account
          </button>
        </div>

        {/* Social Buttons */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          margin: "30px 0",
          position: "relative",
          zIndex: 2
        }}>
          <button
            onClick={() => simulateAuthAction("Google")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "80px",
              height: "80px",
              borderRadius: "16px",
              border: "2px solid rgba(234, 67, 53, 0.2)",
              background: "rgba(234, 67, 53, 0.1)",
              color: "#ea4335",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.3s ease",
              backdropFilter: "blur(10px)"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-4px)";
              e.target.style.background = "rgba(234, 67, 53, 0.15)";
              e.target.style.borderColor = "#ea4335";
              e.target.style.boxShadow = "0 8px 25px rgba(234, 67, 53, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.background = "rgba(234, 67, 53, 0.1)";
              e.target.style.borderColor = "rgba(234, 67, 53, 0.2)";
              e.target.style.boxShadow = "none";
            }}
          >
            Google
          </button>
          <button
            onClick={() => simulateAuthAction("Microsoft")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "80px",
              height: "80px",
              borderRadius: "16px",
              border: "2px solid rgba(0, 164, 241, 0.2)",
              background: "rgba(0, 164, 241, 0.1)",
              color: "#00a4f1",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.3s ease",
              backdropFilter: "blur(10px)"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-4px)";
              e.target.style.background = "rgba(0, 164, 241, 0.15)";
              e.target.style.borderColor = "#00a4f1";
              e.target.style.boxShadow = "0 8px 25px rgba(0, 164, 241, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.background = "rgba(0, 164, 241, 0.1)";
              e.target.style.borderColor = "rgba(0, 164, 241, 0.2)";
              e.target.style.boxShadow = "none";
            }}
          >
            Microsoft
          </button>
          <button
            onClick={() => simulateAuthAction("Apple")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "80px",
              height: "80px",
              borderRadius: "16px",
              border: "2px solid rgba(0, 0, 0, 0.2)",
              background: "rgba(0, 0, 0, 0.1)",
              color: "#000",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.3s ease",
              backdropFilter: "blur(10px)"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-4px)";
              e.target.style.background = "rgba(0, 0, 0, 0.15)";
              e.target.style.borderColor = "#000";
              e.target.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.background = "rgba(0, 0, 0, 0.1)";
              e.target.style.borderColor = "rgba(0, 0, 0, 0.2)";
              e.target.style.boxShadow = "none";
            }}
          >
            Apple
          </button>
        </div>

        {/* Footer Links */}
        <div style={{
          textAlign: "center",
          marginTop: "30px",
          position: "relative",
          zIndex: 2
        }}>
          <p style={{
            color: "rgba(0, 0, 0, 0.7)",
            fontSize: "14px",
            marginBottom: "10px"
          }}>
            Already have an account?{' '}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Redirecting to Sign In page...");
              }}
              style={{
                color: "rgba(0, 0, 0, 0.8)",
                textDecoration: "none",
                fontSize: "14px",
                position: "relative"
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#00d4ff";
                e.target.style.textShadow = "0 0 10px rgba(0, 212, 255, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "rgba(0, 0, 0, 0.8)";
                e.target.style.textShadow = "none";
              }}
            >
              Sign In
            </a>
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("Returning to Home Page...");
            }}
            style={{
              color: "rgba(0, 0, 0, 0.8)",
              textDecoration: "none",
              fontSize: "14px",
              position: "relative"
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#00d4ff";
              e.target.style.textShadow = "0 0 10px rgba(0, 212, 255, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "rgba(0, 0, 0, 0.8)";
              e.target.style.textShadow = "none";
            }}
          >
            Return to Home Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;