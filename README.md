# Forma

An installable fitness journal for meals, training and recovery. This repository contains the compiled static application for GitHub Pages.

Open the hosted site in Safari on iPhone, choose Share → Add to Home Screen, then launch it once while connected. Manual journaling works offline after the app is cached.

Capture accepts selected photos/screenshots, recorded voice notes and typed descriptions. Azure models prepare editable suggestions; nothing enters the journal until you review and save. Food portions and nutrients may be estimates. Unknown nutrients remain marked incomplete.

Journal records stay in this browser on this device. Owner-only Microsoft sign-in protects the AI backend; it does not sync journal records. Only selected media/text is sent to the configured Azure processing services when Analyze is chosen. Raw capture media is removed locally after all suggestions are saved or discarded; server draft recovery is encrypted and expires after 15 minutes. Provider retention follows the Azure account settings.

Use My data → Export backup regularly. Version 2 backups preserve records and provenance but exclude unfinished capture media. Version 1 backups remain importable. Restoring replaces the selected journal after review. Existing version 1 browser journals migrate transactionally and remain separate from example data.

Initial profiles, targets and example history are illustrative. This repository contains no personal journal, imported backups, source media or model credentials.

Built with React, TypeScript, Vite, IndexedDB/idb, Microsoft Authentication Library, Outfit/Manrope fonts and Lucide icons. Bundled license notices are in `licenses/`.
