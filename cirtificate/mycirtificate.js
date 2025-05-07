// Certificate ID ke corresponding images
        const certificates = {
            "A09754": "Images/A09754.jpg",
            "45231234": "certificate2.jpg",
            "78563412": "certificate3.jpg",
            "96385274": "certificate4.jpg",
            "15948726": "certificate5.jpg"
        };

        // Function to get URL parameter
        function getQueryParam(param) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(param);
        }

        // Function to verify certificate ID
        function verifyCertificate(certID = null) {
            let certInput = document.getElementById("certInput");
            let certIDValue = certID || certInput.value.trim();
            let result = document.getElementById("result");
            let certificate = document.getElementById("certificate");
            let certificateLink = document.getElementById("certificateLink");
            let downloadBtn = document.getElementById("downloadBtn");

            if (certificates.hasOwnProperty(certIDValue)) {
                result.textContent = "☑ Verified Successfully!";
                result.style.color = "green";
                certificate.src = certificates[certIDValue];
                certificate.style.display = "block";
                downloadBtn.style.display = "block";

                // Certificate link
                let certURL = `https://adtech2021.netlify.app/mycirtificate.aspx.html/${certIDValue}`;
                certificateLink.href = certURL;
            } else {
                result.textContent = "ⓘ Cirtificate Not Found!";
                result.style.color = "red";
                certificate.style.display = "none";
                downloadBtn.style.display = "none";
            }
        }

        // Auto-check URL parameter for certificate ID
        window.onload = function () {
            let certID = getQueryParam("certid");
            if (certID) {
                verifyCertificate(certID);
            }
        };

        // Function to download certificate
        function downloadCertificate() {
            let certificate = document.getElementById("certificate").src;
            let link = document.createElement("a");
            link.href = certificate;
            link.download = "Certificate.jpg";
            link.click();
        }

