---
trigger: always_on
---

# Auto Git Push

Nach jedem Prompt, bei dem Änderungen am Workspace vorgenommen wurden, müssen alle Änderungen automatisch mit `git add .`, `git commit -m "..."` und `git push` in das Remote-Repository (GitHub) gepusht werden, damit der aktuelle Stand immer online ist.
