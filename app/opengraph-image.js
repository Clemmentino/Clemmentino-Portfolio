import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "Clemmentino Portfolio social cover";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

async function getImageData(fileName) {
  const file = await readFile(path.join(process.cwd(), "public", fileName));
  const mimeType = fileName.endsWith(".jpg") ? "image/jpeg" : "image/png";

  return `data:${mimeType};base64,${file.toString("base64")}`;
}

export default async function OpenGraphImage() {
  const [portrait, logo, preview] = await Promise.all([
    getImageData("me.jpg"),
    getImageData("svglogo.png"),
    getImageData("scene-preview-a.png")
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(180deg, #faf4ea 0%, #f5ede0 48%, #faf6ee 100%)",
          color: "#18120f",
          fontFamily: "Arial, sans-serif"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -80,
            width: 380,
            height: 380,
            borderRadius: 999,
            background: "rgba(238, 154, 112, 0.35)"
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 90,
            width: 280,
            height: 280,
            borderRadius: 999,
            background: "rgba(199, 216, 243, 0.48)"
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: -40,
            width: 340,
            height: 340,
            borderRadius: 999,
            background: "rgba(210, 220, 196, 0.42)"
          }}
        />

        <div
          style={{
            width: "58%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "48px 46px 44px 56px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                display: "flex",
                width: 62,
                height: 62,
                borderRadius: 18,
                overflow: "hidden",
                background: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(47, 35, 24, 0.08)"
              }}
            >
              <img
                src={logo}
                alt="Clemmentino logo"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 16,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "rgba(24, 18, 15, 0.58)"
                }}
              >
                {"Clemmentino Portfolio"}
              </div>
              <div style={{ display: "flex", fontSize: 22, fontWeight: 700 }}>
                {"Frontend-Focused Full-Stack Developer"}
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "Georgia, serif",
                fontSize: 74,
                lineHeight: 0.95,
                letterSpacing: -2,
                gap: 2
              }}
            >
              <div>Built to work.</div>
              <div>Made to feel clear.</div>
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: 520,
                fontSize: 28,
                lineHeight: 1.4,
                color: "#61564c"
              }}
            >
              {
                "Websites, frontend systems, and public-interest tech with a clear visual eye and real build depth."
              }
            </div>
          </div>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            {["PHP", "Frontend systems", "Government tech", "Public-interest tools"].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    padding: "14px 18px",
                    borderRadius: 999,
                    border: "1px solid rgba(47, 35, 24, 0.12)",
                    background: "rgba(255, 250, 241, 0.82)",
                    fontSize: 20,
                    color: "#43362b"
                  }}
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        <div
          style={{
            width: "42%",
            height: "100%",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "42px 42px 42px 0"
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "92px 52px 102px 58px",
              borderRadius: 42,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.44), rgba(255,250,241,0.72))",
              border: "1px solid rgba(47, 35, 24, 0.08)",
              transform: "rotate(-5deg)"
            }}
          />
          <div
            style={{
              display: "flex",
              position: "absolute",
              inset: "62px 24px 126px 88px",
              overflow: "hidden",
              borderRadius: "42px 42px 170px 42px",
              border: "1px solid rgba(47, 35, 24, 0.08)",
              boxShadow: "0 24px 60px rgba(91, 71, 48, 0.14)",
              transform: "rotate(2deg)"
            }}
          >
            <img
              src={portrait}
              alt="Portrait of Clemmentino"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 18%"
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              position: "absolute",
              right: 0,
              bottom: 34,
              width: 260,
              padding: 12,
              borderRadius: 28,
              background: "rgba(255, 250, 241, 0.9)",
              border: "1px solid rgba(47, 35, 24, 0.1)",
              boxShadow: "0 20px 40px rgba(91, 71, 48, 0.1)"
            }}
          >
            <div
              style={{
                display: "flex",
                overflow: "hidden",
                borderRadius: 20,
                border: "1px solid rgba(47, 35, 24, 0.08)"
              }}
            >
              <img
                src={preview}
                alt="Project preview"
                style={{
                  width: "100%",
                  height: 140,
                  objectFit: "cover"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
