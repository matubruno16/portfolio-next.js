/* eslint-disable @next/next/no-img-element */
interface EmailTemplateProps {
  name: string;
  subject: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  subject,
  email,
  message,
}) => (
  <div
    style={{
      maxWidth: "1000px",
      margin: "auto",
      width: "100%",
      height: "100%",
    }}
  >
    <header
      style={{
        width: "90%",
        height: "auto",
        margin: "auto",
        backgroundColor: "#D9ECFF",
        borderRadius: "30px",
        textAlign: "center",
        padding: "1.25rem",
        color: "#303030",
      }}
    >
      <img
        src="https://i.postimg.cc/gk7dWmM1/logo.png"
        alt="Logo Matias Bruno - Desarrollador Web"
        width={150}
        height={150}
        style={{ aspectRatio: "1/1", objectFit: "contain" }}
      />
      <h1 style={{ fontSize: "40px", fontWeight: "600", margin: "12px" }}>
        Hola Matias,
      </h1>
      <h2 style={{ fontSize: "28px", textWrap: "balance" }}>
        Has recibido un nuevo mensaje de su formulario web.
      </h2>
    </header>
    <div
      style={{ width: "85%", height: "100%", padding: "2rem", margin: "auto" }}
    >
      <div>
        <p
          style={{
            color: "#303030",
            fontSize: "22px",
            fontWeight: "600",
            marginBottom: "16px",
          }}
        >
          De:&nbsp;{" "}
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              textTransform: "capitalize",
            }}
          >
            {name}
          </span>
        </p>
        <p
          style={{
            color: "#303030",
            fontSize: "22px",
            fontWeight: "600",
            marginBottom: "16px",
          }}
        >
          E-mail:&nbsp;{" "}
          <span style={{ fontSize: "16px", fontWeight: "500" }}>{email}</span>
        </p>
        <p
          style={{
            color: "#303030",
            fontSize: "22px",
            fontWeight: "600",
            marginBottom: "16px",
          }}
        >
          Asunto:&nbsp;{" "}
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              textTransform: "capitalize",
            }}
          >
            {subject}
          </span>
        </p>
        <hr
          style={{
            borderTop: "2px solid #cbd5e0",
            width: "70%",
            margin: "auto",
          }}
        />
      </div>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          marginBottom: "16px",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            textAlign: "center",
            color: "#4b5563",
            paddingTop: "16px",
          }}
        >
          Mensaje:
        </h2>
        <p
          style={{
            color: "#4b5563",
            fontSize: "16px",
            textAlign: "center",
            paddingBottom: "16px",
          }}
        >
          {message}
        </p>
        <hr
          style={{
            borderTop: "2px solid #cbd5e0",
            width: "70%",
            margin: "auto",
            marginBottom: "20px",
          }}
        />
      </div>
    </div>
  </div>
);
