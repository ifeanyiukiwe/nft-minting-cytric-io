import React from "react";
import Frame from "../assets/Frame.png";
import player from "../assets/i.png";
import Frames from "../assets/Frame (1).png";
import Purple from "../assets/img-purple.png";
import tech from "../assets/img-tech.png";
import forest from "../assets/img-forest.png";
import Mark from "../assets/mark.png";
import Share from "../assets/i (1).png";

function Nft() {
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
        className="card p-5 mt-5"
        style={{ border: "2px solid #10B981", background: "#0d131f" }}
      >
        <div className="text-center">
          <img src={Mark} alt="Mark-logo" width="40px" />
        </div>
        <div className="text-center">
          <h2 style={{ color: "#10B981" }}>NFT minted Successfully!</h2>
          <small style={{ color: "#5c5f65" }}>
            Your NFT has been created and added to your collection
          </small>
        </div>
        <div className="mt-3 d-flex flex-column align-items-center">
          <div
            className="card"
            style={{
              width: "470px",
              background: "#1a1a1a",
              borderRadius: "12px",
              overflow: "hidden",
              paddingBottom: "15px",
            }}
          >
            <figure
              style={{ margin: "0", padding: "20px", textAlign: "center" }}
            >
              <img
                src={Purple}
                alt="NFTimg"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "16px",
                }}
              />
              <figcaption style={{ padding: "15px" }}>
                <div>
                  <p style={{ color: "#9CA3AF", fontSize: "14px" }}>
                    A journey through digital dimensions
                  </p>
                  <h6 style={{ color: "#fff" }}>Celestial Harmony #004</h6>
                </div>
                <p style={{ color: "#9CA3AF", fontSize: "14px" }}>
                  Description
                </p>
                <small style={{ color: "#9CA3AF", fontSize: "14px" }}>
                  A mesmerizing blend of cosmic elements and digital artistry
                </small>
                <div style={{ marginTop: "15px" }}>
                  <small style={{ color: "#9CA3AF", fontSize: "14px" }}>
                    NFT ID
                  </small>
                  <div
                    style={{
                      color: "#8B5CF6",
                      fontSize: "14px",
                      marginTop: "5px",
                    }}
                  >
                    <small>#8f3E2A1</small>
                    <small>D9c</small>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="button mt-4 d-flex justify-content-center gap-3">
            <button
              className="btn d-flex justify-content-center align-items-center"
              style={{
                background: "#1F2937",
                color: "#fff",
                padding: "15px",
                borderRadius: "10px",
                fontSize: "14px",
                width: "180px",
                textAlign: "center",
              }}
            >
              <img
                src={Share}
                alt="btnimg"
                width="15px"
                height="15px"
                style={{ marginRight: "8px" }}
              />
              Share
            </button>
            <button
              className="btn d-flex justify-content-center align-items-center"
              style={{
                background: "linear-gradient(90deg, #EC4899 0%, #8B5CF6 100%)",
                color: "#fff",
                padding: "15px",
                borderRadius: "10px",
                fontSize: "14px",
                width: "180px",
                textAlign: "center",
              }}
            >
              <img
                src={Frames}
                alt="btnimg"
                width="15px"
                height="15px"
                style={{ marginRight: "8px" }}
              />
              Mint Another
            </button>
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

export default Nft;
