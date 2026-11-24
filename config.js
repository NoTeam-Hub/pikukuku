/* ------------------------------------------------------------------
   Piku & Kuku Pickles — launch settings (edit this file only)
   ------------------------------------------------------------------
   mode:
     'auto'   → site below the banner stays hidden and ordering stays
                disabled until launchDate, then unlocks by itself
                (no redeploy needed, even if a visitor has the page open).
     'locked' → always locked (use if the launch gets postponed).
     'open'   → always unlocked (use to go live early).
   launchDate:  ISO date with timezone. 1 April 2027, midnight IST.
   previewKey:  open  https://pikukuku.store/?preview=<previewKey>  to look
                at the full site before launch. This is a convenience, not
                security — change it, or set it to '' to switch preview off.
   showBanner:  set to false after launch to remove the "Launching Soon" banner.
------------------------------------------------------------------ */
window.PK_CONFIG = {
  mode: 'auto',
  launchDate: '2027-04-01T00:00:00+05:30',
  previewKey: 'kuku-preview-2027',
  showBanner: true
};
