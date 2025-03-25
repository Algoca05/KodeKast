import React from 'react';

const Footer = () => (
    <footer className="bg-black text-yellow-700 p-5 text-center">
        <p>© {new Date().getFullYear()} Kodekast Podcast. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-3">
            <a href="https://www.youtube.com/channel/UCcV1pT2k5cXZQ993GYWg69Q" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube text-2xl"></i>
            </a>
            <a href="https://x.com/kodekastPodcast" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61574799802789" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="mailto:kodekastpodcast@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-google text-2xl"></i>
            </a>
        </div>
    </footer>
);

export default Footer;
