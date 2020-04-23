import React from 'react';
import Link from './Link';

const Footer = () => (
    <footer>
        You can find me:
        <ul>
            <li>
                Responding late to your{' '}
                <Link
                    href="mailto:hello@carolgilabert.me"
                    target="_blank"
                    rel="me noopener noreferrer"
                >
                    email{' '}
                    <span
                        role="img"
                        aria-label="emoji of an envelope sealed with a heart"
                    >
                        💌
                    </span>
                </Link>
            </li>
            <li>
                Oversharing on{' '}
                <Link
                    href="https://twitter.com/CarolSaysThings"
                    target="_blank"
                    rel="me noopener noreferrer"
                >
                    twitter{' '}
                    <span role="img" aria-label="emoji of bird head">
                        🐦
                    </span>
                </Link>
            </li>
            <li>
                Stitching code together on{' '}
                <Link
                    href="https://github.com/carolgilabert"
                    target="_blank"
                    rel="me noopener noreferrer"
                >
                    github{' '}
                    <span
                        role="img"
                        aria-label="emoji of a woman typing on a laptop"
                    >
                        👩‍💻
                    </span>
                </Link>
            </li>
            <li>
                Throwing stuff at the wall on{' '}
                <Link
                    href="https://glitch.com/@carolgilabert"
                    target="_blank"
                    rel="me noopener noreferrer"
                >
                    glitch{' '}
                    <span role="img" aria-label="emoji of a crystal ball">
                        🔮
                    </span>
                </Link>
            </li>
            <li>
                Chatting about stuff on{' '}
                <Link
                    href="https://noti.st/carolgilabert"
                    target="_blank"
                    rel="me noopener noreferrer"
                >
                    notist{' '}
                    <span role="img" aria-label="emoji of a microphone">
                        🎤
                    </span>
                </Link>
            </li>
            <li>
                <Link
                    href="https://haha.business/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ha ha business
                </Link>
                -ing on{' '}
                <Link
                    href="https://www.linkedin.com/in/carolgilabert"
                    target="_blank"
                    rel="me noopener noreferrer"
                >
                    linkedin{' '}
                    <span
                        role="img"
                        aria-label="emoji of a woman wearing a suit"
                    >
                        👩‍💼
                    </span>
                </Link>
            </li>
        </ul>
        © 2020 · Carolina Gilabert ·
        <Link
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
        >
            cc-by-sa
        </Link>
    </footer>
);

export default Footer;
