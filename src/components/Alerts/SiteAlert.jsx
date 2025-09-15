import React, { useEffect, useState } from "react";
import "./SiteAlert.css";
// import { apiGet } from "../../api/client";
import groupQR from "../../assets/saac-qr.png"; // <-- add your QR image to assets

const STORAGE_KEY = "saac_site_alert_shown_v1";

export default function SiteAlert() {
  const [open, setOpen] = useState(false);
  const [dontShow, setDontShow] = useState(false);
  const [title, setTitle] = useState("Join SAAC Unofficial 2029 Group");
  const [message, setMessage] = useState(
    "Scan the QR code or click the link below to join the WhatsApp group."
  );

  useEffect(() => {
    const hasShown = localStorage.getItem(STORAGE_KEY);
    // apiGet("/alerts/public")
    //   .then((data) => {
    //     if (data && data.title && data.message) {
    //       setTitle(data.title);
    //       setMessage(data.message);
    //     }
    //     if (!hasShown && data) {
    //       const timer = setTimeout(() => setOpen(true), 600);
    //       return () => clearTimeout(timer);
    //     }
    //   })
      
    //   .catch(() => {
    //     if (!hasShown) {
    //       const timer = setTimeout(() => setOpen(true), 600);
    //       return () => clearTimeout(timer);
    //     }
    //   });
      if (!hasShown) {
          const timer = setTimeout(() => setOpen(true), 600);
          return () => clearTimeout(timer);
        }
  }, []);

  const dismiss = () => {
    if (dontShow) {
      localStorage.setItem(STORAGE_KEY, "1");
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="site-alert-overlay" role="dialog" aria-modal="true">
      <div className="site-alert-card">
        <div className="site-alert-header">
          <h5 className="site-alert-title">{title}</h5>
          <button
            className="site-alert-close"
            aria-label="Close"
            onClick={dismiss}
          >
            ×
          </button>
        </div>
        <div className="site-alert-body">
          <p>{message}</p>
          {/* QR Code */}
          <div className="qr-container">
            <img src={groupQR} alt="WhatsApp Group QR" />
          </div>
          {/* Direct Link */}
          <div className="group-link">
            <a
              href="https://chat.whatsapp.com/FYOUR_INVITE_CODE"
              target="_blank"
              rel="noopener noreferrer"
            >
              👉 Join WhatsApp Group
            </a>
          </div>
        </div>
        <div className="site-alert-footer">
          <label className="site-alert-checkbox">
            <input
              type="checkbox"
              checked={dontShow}
              onChange={(e) => setDontShow(e.target.checked)}
            />
            <span>Don't show again</span>
          </label>
          <button className="btn btn-dismiss" onClick={dismiss}>
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
