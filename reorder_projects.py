
import re

with open("d:/Koding/portfolio/index.html", "r", encoding="utf-8") as file:
    content = file.read()

market = """                    <a href="project-marketplace.html" class="glass project-item hidden-project reveal"
                        style="display: none;">
                        <div class="project-img">
                            <img src="./images/accounting1.png" alt="Marketplace Accounting">
                        </div>
                        <h3 class="project-title">Marketplace Integrated Accounting System <svg width="18" height="18"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg></h3>
                        <p class="project-desc">Web-based accounting system synchronizing data from Shopee & Lazada for
                            automated financial reporting.</p>

                        <div class="project-features-title">TESTING FOCUS</div>
                        <ul class="project-features-list">
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg> Marketplace API Data Sync</li>
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg> Financial Transaction Recording</li>
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg> Regression & End-to-End Testing</li>
                        </ul>

                        <div class="hover-hint">Click to view project details</div>
                    </a>"""

laundry = """                    <a href="project-laundry.html" class="glass project-item reveal">
                        <div class="project-img">
                            <img src="./images/texkleen.png" alt="Laundry Testing">
                        </div>
                        <h3 class="project-title">Laundry Hotel Management System <svg width="18" height="18"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg></h3>
                        <p class="project-desc">Streamlining hotel laundry operations with order management and
                            real-time tracking.</p>

                        <div class="project-features-title">TESTING FOCUS</div>
                        <ul class="project-features-list">
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg> Order Management Workflow</li>
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg> Item Tracking & Inventory Sync</li>
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg> Mobile App Functionality</li>
                        </ul>

                        <div class="hover-hint">Click to view project details</div>
                    </a>"""

pestcontrol = """                    <a href="project-pestcontrol.html" class="glass project-item reveal">
                        <div class="project-img">
                            <img src="./images/website-proton.png" alt="Pest Control Testing">
                        </div>
                        <h3 class="project-title">Pest Control Management System <svg width="18" height="18"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg></h3>
                        <p class="project-desc">Managing field service operations, scheduling, and technician
                            assignments for pest control services.</p>

                        <div class="project-features-title">TESTING FOCUS</div>
                        <ul class="project-features-list">
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg> Service Scheduling & Dispatch</li>
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg> Technician Activity Tracking</li>
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg> Service Reporting Accuracy</li>
                        </ul>

                        <div class="hover-hint">Click to view project details</div>
                    </a>"""

fuomo = """                    <a href="project-fuomo.html" class="glass project-item reveal">
                        <div class="project-img">
                            <img src="./images/website-fuomo.png" alt="FUOMO Monetization">
                        </div>
                        <h3 class="project-title">FUOMO Creator Monetization Platform <svg width="18" height="18"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg></h3>
                        <p class="project-desc">Enabling digital creators to monetize content through fan support, paid
                            content, and memberships.</p>

                        <div class="project-features-title">TESTING FOCUS</div>
                        <ul class="project-features-list">
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg> Payment & Transaction Workflows</li>
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg> Content Access Control Logic</li>
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg> Creator Earnings Tracking</li>
                        </ul>

                        <div class="hover-hint">Click to view project details</div>
                    </a>"""

sales = """                    <a href="project-sales.html" class="glass project-item hidden-project reveal"
                        style="display: none;">
                        <div class="project-img">
                            <img src="./images/xymart1.png" alt="Online Sales System">
                        </div>
                        <h3 class="project-title">Online Product Sales System <svg width="18" height="18"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg></h3>
                        <p class="project-desc">E-commerce system for managing product catalogs, customer transactions,
                            and order processing across platforms.</p>

                        <div class="project-features-title">TESTING FOCUS</div>
                        <ul class="project-features-list">
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg> E2E Purchase Journey</li>
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg> Cross-Platform Sync (Web & App)</li>
                            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg> Payment & Order Automation</li>
                        </ul>

                        <div class="hover-hint">Click to view project details</div>
                    </a>"""

new_section = f"""                    <!-- QA Project 1 -->
{laundry}

                    <!-- QA Project 2 -->
{pestcontrol}

                    <!-- QA Project 3 -->
{fuomo}

                    <!-- QA Project 4 (Hidden) -->
{market}

                    <!-- QA Project 5 (Hidden) -->
{sales}"""

import re
pattern = r"                    <!-- QA Project 1 -->.*?(?=                </div>\s+<div class=\"view-all-container reveal\">)"
new_content = re.sub(pattern, new_section + "\n", content, flags=re.DOTALL)

with open("d:/Koding/portfolio/index.html", "w", encoding="utf-8") as file:
    file.write(new_content)

print("Replacement done")

