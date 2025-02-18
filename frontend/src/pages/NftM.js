import React from "react";
import { useNavigate } from "react-router-dom";
import Frame from "../assets/Frame.png";
import player from "../assets/i.png";
import Frames from "../assets/Frame (1).png";
import Purple from "../assets/img-purple.png";
import tech from "../assets/img-tech.png";
import forest from "../assets/img-forest.png";

function NftM({ message }) {
  const navigate = useNavigate();

  const handleMintNFTClick = () => {
    navigate("/nft");
  };
  return (
    <div
      className="container-fluid w-100 text-white py-5"
      style={{
        background: "#0d131f",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="hero-section">
        <div className="text-center">
          <h2
            className="mt-3 d-block mx-auto"
            style={{ maxWidth: "550px", color: "#fff" }}
          >
            Discover & Collect
          </h2>
          <h2 className="d-block" style={{ color: "#fff" }}>
            Extraordinary NFTs
          </h2>
          <small
            className="mt-3 d-block mx-auto"
            style={{ maxWidth: "550px", color: "#5c5f65" }}
          >
            Enter the world of digital art and collectibles. Explore unique NFTs
            created by artists
            <span className="d-block">worldwide.</span>
          </small>
        </div>
      </div>
      <div className="button mt-4 d-flex align-items-center gap-3">
        <button
          className="btn d-flex align-items-center"
          style={{
            background: "linear-gradient(90deg, #EC4899 0%, #8B5CF6 100%)",
            color: "#fff",
            padding: "15px",
            gap: "5px",
            borderRadius: "10px",
            border: "none",
            fontSize: "12px",
          }}
        >
          {" "}
          <img src={Frame} alt="btnimg" width="10px" height="10px" />
          Start Creating
        </button>
        <button
          className="btn d-flex align-items-center"
          style={{
            background: "inherit",
            color: "#fff",
            padding: "15px",
            gap: "5px",
            borderRadius: "10px",
            border: "1px solid #fff",
            fontSize: "12px",
          }}
        >
          {" "}
          <img src={player} alt="btnimg" width="10px" height="10px" /> Watch
          Demo
        </button>
      </div>
      <div
        className="card mt-5"
        style={{
          background: "#0d131f",
          border: "1px solid #E5E7EB",
          maxWidth: "500px", // Ensures it doesn't exceed 500px on large screens
          width: "90%", // Makes it responsive on small screens
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "0 auto", // Centers the card
        }}
      >
        <div>
          <h2 style={{ color: "#fff", textAlign: "center" }}>Mint Your NFT</h2>
          <div>
            <form>
              <ul style={{ padding: "0", listStyle: "none" }}>
                <li style={{ display: "flex", flexDirection: "column" }}>
                  <label style={{ color: "#E5E7EB", fontSize: "12px" }}>
                    NFT Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter NFT name"
                    style={{
                      padding: "12px",
                      fontSize: "15px",
                      borderRadius: "10px",
                      marginBottom: "15px",
                      background: "#374151",
                      color: "#fff",
                      border: "1px solid #E5E7EB",
                      width: "100%", // Makes input responsive
                    }}
                  />
                </li>
                <li style={{ display: "flex", flexDirection: "column" }}>
                  <label style={{ color: "#E5E7EB", fontSize: "12px" }}>
                    Description
                  </label>
                  <textarea
                    placeholder="Enter your NFT"
                    style={{
                      padding: "12px",
                      fontSize: "15px",
                      borderRadius: "10px",
                      marginBottom: "15px",
                      background: "#374151",
                      color: "#fff",
                      border: "1px solid #E5E7EB",
                      width: "100%", // Responsive textarea
                      height: "80px",
                    }}
                  />
                </li>
                <li style={{ display: "flex", flexDirection: "column" }}>
                  <label style={{ color: "#E5E7EB", fontSize: "12px" }}>
                    Image URL
                  </label>
                  <input
                    type="text"
                    placeholder="Enter image URL"
                    style={{
                      padding: "12px",
                      fontSize: "15px",
                      borderRadius: "10px",
                      background: "#374151",
                      color: "#fff",
                      border: "1px solid #E5E7EB",
                      width: "100%",
                    }}
                  />
                </li>
              </ul>
              <button
                className="btn d-flex justify-content-center align-items-center"
                style={{
                  width: "100%",
                  background:
                    "linear-gradient(90deg, #EC4899 0%, #8B5CF6 100%)",
                  color: "#fff",
                  padding: "12px",
                  gap: "10px",
                  borderRadius: "10px",
                  border: "none",
                  fontSize: "14px",
                  textAlign: "center",
                  marginTop: "10px",
                }}
                onClick={handleMintNFTClick}
              >
                <img src={Frames} alt="btnimg" width="15px" height="15px" />
                Mint NFT
              </button>
            </form>
          </div>
        </div>
      </div>

      <div
        className="main"
        style={{
          marginTop: "40px",
        }}
      >
        <div>
          <h2 style={{ textAlign: "left", color: "#fff" }}>Your NFT Gallery</h2>
        </div>

        <div
          className="nft-cards mt-5"
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap", // Allows wrapping to a column
          }}
        >
          {[
            {
              id: 1,
              img: Purple,
              title: "Cosmic Dreams #001",
              desc: "A journey through digital dimensions",
            },
            {
              id: 2,
              img: tech,
              title: "NEO Genesis #002",
              desc: "Digital evolution manifested",
            },
            {
              id: 3,
              img: forest,
              title: "Digital Horizon #003",
              desc: "Where reality meets digital art",
            },
          ].map((nft) => (
            <div
              key={nft.id}
              className="card"
              style={{
                width: "300px",
                background: "#1a1a1a",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <figure style={{ margin: "0" }}>
                <img
                  src={nft.img}
                  alt="NFTimg"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
                <figcaption style={{ padding: "15px" }}>
                  <h6 style={{ color: "#fff" }}>{nft.title}</h6>
                  <p
                    style={{
                      color: "#9CA3AF",
                      fontFamily: "Inter",
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "14px",
                    }}
                  >
                    {nft.desc}
                  </p>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NftM;
