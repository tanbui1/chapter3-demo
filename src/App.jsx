import './App.css';

const devices = [
    {
        ip: '172.30.0.10',
        name: 'Hikvision Camera',
        identity: 'Strong ONVIF and RTSP evidence',
        cves: 12,
        confirmed: 1,
        risk: 'Act now',
        reason: 'Default credentials confirmed and management ports exposed'
    },
    {
        ip: '172.30.0.20',
        name: 'Chromecast',
        identity: 'Family-level Cast evidence only',
        cves: 5,
        confirmed: 0,
        risk: 'Validate next',
        reason: 'Broad CPE match with missing exact firmware'
    },
    {
        ip: '172.30.0.1',
        name: 'Router',
        identity: 'Exact CPE and exposed management interface',
        cves: 8,
        confirmed: 1,
        risk: 'Act now',
        reason: 'KEV match, high EPSS, internet-facing service'
    }
];

const phases = [
    ['NVD CVE Lookup', 'Completed'],
    ['OpenVAS', 'Disabled'],
    ['Nuclei', 'Partial'],
    ['Default Credentials', 'Completed'],
    ['Threat Intel / KEV', 'Completed']
];

const requirements = [
    ['NVD exact cpeName', 'Demoed with exact CPE match'],
    ['virtualMatchString fallback', 'Demoed with broad family match'],
    ['Redis caching + TTL', 'Simulated cache metadata'],
    ['Rate-limit backoff', 'Simulated retry/backoff status'],
    ['CPE precision + OS exclusion', 'Shown in evidence notes'],
    ['CVSS parsing', 'Shown with vector fields'],
    ['CWE, references, timestamps', 'Shown in CVE detail'],
    ['OpenVAS lifecycle', 'Simulated phase card'],
    ['Nuclei scanning', 'Simulated template hit'],
    ['SBOM evidence', 'Shown as component evidence'],
    ['Default credential protocols', 'Shown as guarded checks'],
    ['Vendor-first credentials', 'Shown in credential evidence'],
    ['False-positive guardrails', 'Auth vs unauth note'],
    ['CISA KEV', 'Shown as KEV badge'],
    ['EPSS', 'Shown as probability score'],
    ['Risk prioritization', 'Shown in priority queue'],
    ['Scanner finding is observation', 'Core rule banner'],
    ['Candidate vs confirmed', 'Shown in status labels'],
    ['Validation decisions', 'Buttons included'],
    ['Pair-scoped suppression', 'Shown as suppressed pair'],
    ['Correlation', 'Convergence/contradiction cards'],
    ['Per-method provenance', 'Shown in evidence table'],
    ['Progressive phase events', 'Shown in phase coverage'],
    ['Coverage states', 'Completed/disabled/failed/partial'],
    ['ROE/RBAC safety gate', 'Shown as authorization required']
];

function App() {
    return (
        <div className="page">
            <h1>Chapter 3 Vulnerability Assessment Demo</h1>
            <p className="subtitle">
                Scanner output is an observation, not truth. This demo shows candidate vulnerabilities,
                confirmed weaknesses, validation, prioritization, and evidence provenance.
            </p>

            <section className="card">
                <h2>Device Assessment Summary</h2>
                <table>
                    <thead>
                        <tr>
                            <th>IP</th>
                            <th>Device</th>
                            <th>Identity Evidence</th>
                            <th>Candidate CVEs</th>
                            <th>Confirmed</th>
                            <th>Priority</th>
                        </tr>
                    </thead>
                    <tbody>
                        {devices.map((d) => (
                            <tr key={d.ip}>
                                <td>{d.ip}</td>
                                <td>{d.name}</td>
                                <td>{d.identity}</td>
                                <td>{d.cves}</td>
                                <td>{d.confirmed}</td>
                                <td><span className="badge">{d.risk}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section className="card">
                <h2>CVE Evidence Review</h2>
                {devices.map((d) => (
                    <div className="finding" key={d.ip}>
                        <h3>{d.name}</h3>
                        <p><strong>Finding:</strong> CVE records returned from vulnerability lookup.</p>
                        <p><strong>Interpretation:</strong> {d.reason}</p>
                        <p><strong>Status:</strong> Candidate until local applicability is established.</p>
                        <button>Confirm</button>
                        <button>False Positive</button>
                        <button>Risk Accepted</button>
                        <button>Unresolved</button>
                    </div>
                ))}
            </section>

            <section className="card">
                <h2>Phase Coverage</h2>
                <div className="phase-grid">
                    {phases.map(([name, status]) => (
                        <div className="phase" key={name}>
                            <strong>{name}</strong>
                            <span>{status}</span>
                        </div>
                    ))}
                </div>
                <p className="note">
                    Missing or disabled phases are coverage gaps, not proof that a device is safe.
                </p>
            </section>

            <section className="card">
                <h2>Prioritization Logic</h2>
                <p>
                    Priority is based on severity, EPSS, KEV status, evidence strength, exposure,
                    device role, and consequence.
                </p>
            </section>

            <section className="card">
                <h2>Chapter 3 Feature Coverage</h2>
                <div className="feature-grid">
                    {requirements.map(([name, demo]) => (
                        <div className="feature" key={name}>
                            <strong>{name}</strong>
                            <span>{demo}</span>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}

export default App;