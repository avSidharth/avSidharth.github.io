---
layout: page
title: Research
subtitle: Carbon and nitrogen chemistry in planet-forming disks
---

<style>
.rcards { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 22px; align-items: start; margin: 18px 0 34px; }
.rcard { border: 1px solid #ddd; border-radius: 10px; overflow: hidden; background: #fff; transition: box-shadow .2s ease; }
.rcard:hover, .rcard[open] { box-shadow: 0 4px 16px rgba(0,0,0,.12); }
.rcard summary { list-style: none; cursor: pointer; }
.rcard summary::-webkit-details-marker { display: none; }
.rcard summary img { display: block; width: 100%; aspect-ratio: 2.2 / 1; object-fit: cover; background: #f4f4f4; }
.rcard .rhead { padding: 14px 16px 12px; }
.rcard .rtag { font-size: .75em; font-weight: bold; text-transform: uppercase; letter-spacing: .03em; }
.rcard h3 { margin: 6px 0 6px; font-size: 1.15em; line-height: 1.3; }
.rcard .teaser { font-size: .92em; margin: 0 0 8px; color: #555; }
.rcard .more { font-size: .85em; font-weight: bold; }
.rcard .more::after { content: " \25BE"; display: inline-block; transition: transform .2s ease; }
.rcard[open] .more::after { transform: rotate(180deg); }
.rcard[open] .more-label::before { content: "Show less"; }
.rcard:not([open]) .more-label::before { content: "Read more"; }
.rcard .rbody { padding: 0 16px 16px; font-size: .93em; border-top: 1px solid #eee; }
.rcard .rbody p { margin: 12px 0 0; }
.rcard .rtools { font-size: .88em; color: #555; }
</style>

My PhD research, in the [Astrochemistry Group at PUC](https://vvguzman.com/) with Dr Viviana Guzmán, studies how **carbon and nitrogen** are processed in the **UV-irradiated layers of planet-forming disks**, and how this processing is imprinted in their isotope ratios. Click a card to read more.

## Current research

<div class="rcards">

<details class="rcard">
  <summary>
    <img src="/assets/img/research/v4046sgr_hcn_maps.jpg" alt="ALMA HCN and HC15N 4-3 maps of the V4046 Sgr disk">
    <div class="rhead">
      <span class="rtag" style="color:#007acc;">PhD research &middot; Astrochemistry</span>
      <h3>Nitrogen isotope fractionation in V4046&nbsp;Sgr</h3>
      <p class="teaser">Resolved <sup>14</sup>N/<sup>15</sup>N and <sup>12</sup>C/<sup>13</sup>C profiles from ALMA observations of HCN isotopologues.</p>
      <span class="more" style="color:#007acc;"><span class="more-label"></span></span>
    </div>
  </summary>
  <div class="rbody">
    <p>Using high-resolution (~0.2″) ALMA observations of HCN, H<sup>13</sup>CN and HC<sup>15</sup>N <i>J</i>=4–3 towards the circumbinary disk around V4046&nbsp;Sgr, I fitted the hyperfine-resolved spectra simultaneously with an MCMC pipeline to derive radially resolved isotope ratios.</p>
    <p>The <sup>14</sup>N/<sup>15</sup>N ratio rises from ~60 at 20&nbsp;au to above 500 near 76&nbsp;au, revealing strong <sup>15</sup>N enrichment in the inner, planet-forming disk. This trend is consistent with isotope-selective photodissociation of N<sub>2</sub> in UV-irradiated disk layers, and spans values characteristic of comets and the Earth. The <sup>12</sup>C/<sup>13</sup>C ratio stays near ~100 at intermediate radii before falling to the local ISM value.</p>
    <p><b>Status:</b> first-author paper submitted to ApJ.</p>
    <p class="rtools"><b>Key techniques:</b> ALMA imaging (CASA) • hyperfine line fitting with MCMC (emcee) • radial profiles with GoFish • rotational diagrams • isotope fractionation</p>
  </div>
</details>

<details class="rcard">
  <summary>
    <img src="/assets/img/research/deco_cn_c2h_hcn.jpg" alt="HCN, C2H and CN maps of the J1608-3828 disk">
    <div class="rhead">
      <span class="rtag" style="color:#8e44ad;">PhD research &middot; Astrochemistry</span>
      <h3>CN, C<sub>2</sub>H and HCN in the irradiated layers of disks</h3>
      <p class="teaser">Comparing three photochemistry tracers in about 12 disks from the ALMA Large Program DECO.</p>
      <span class="more" style="color:#8e44ad;"><span class="more-label"></span></span>
    </div>
  </summary>
  <div class="rbody">
    <p>Ultraviolet radiation and the gas-phase carbon-to-oxygen (C/O) ratio shape the chemistry of the irradiated surface layers of disks. CN, C<sub>2</sub>H and HCN are often used to study this chemistry, but they have rarely been compared at the same spatial resolution.</p>
    <p>I combine new ALMA observations of CN with C<sub>2</sub>H and HCN data from the ALMA Large Program <b>DECO</b> (Disk-Exoplanet C/Onnection) for about 12 disks around K- and M-type stars. For each disk I match the resolution, extract spectra on a common radial grid and fit the hyperfine structure of all three molecules with the same model. I then compare where they emit, their column densities and excitation temperatures, and look for correlations with stellar, disk and chemical properties, including the C/O ratio.</p>
    <p><b>Status:</b> first-author paper in preparation.</p>
    <p class="rtools"><b>Key techniques:</b> Beam matching and spectral extraction • hyperfine line fitting • column densities and excitation temperatures • correlation analysis</p>
  </div>
</details>

<details class="rcard">
  <summary>
    <img src="/assets/img/research/lupus_rgas_rdust.jpg" alt="Lower limits on the gas-to-dust size ratio of compact disks in Lupus">
    <div class="rhead">
      <span class="rtag" style="color:#16a085;">PhD research project &middot; Disk evolution</span>
      <h3>Gas disk sizes of compact disks in Lupus</h3>
      <p class="teaser">Searching for CO emission from 33 compact dust disks to test radial drift.</p>
      <span class="more" style="color:#16a085;"><span class="more-label"></span></span>
    </div>
  </summary>
  <div class="rbody">
    <p><i>Research project at PUC, mentored by Prof. Gijs Mulders and Dr Pietro Curone.</i></p>
    <p>Most disks in Lupus are compact in dust, but how far their gas extends is largely unknown. If dust grains drift inwards efficiently, the gas disk should be much larger than the dust disk. I calibrated and imaged ALMA Band&nbsp;6 observations of CO <i>J</i>=2–1 towards 33 compact disks in Lupus.</p>
    <p>CO was not detected in any of them with the short integration per source (~7 minutes). Comparing these non-detections with the CO flux expected from each disk's continuum, and accounting for beam dilution, I derived lower limits on the gas disk sizes and on the gas-to-dust size ratio. The limits are consistent with gas disks that extend beyond the dust, as expected if radial drift is efficient, and motivate deeper observations.</p>
    <p class="rtools"><b>Key techniques:</b> ALMA calibration and imaging (CASA) • sensitivity and beam-dilution estimates • gas and dust disk sizes</p>
  </div>
</details>

</div>

## Past research

<div class="rcards">

<details class="rcard">
  <summary>
    <img src="/assets/img/research/uvit_smc_field.jpg" alt="AstroSat/UVIT field towards the Small Magellanic Cloud with sources marked">
    <div class="rhead">
      <span class="rtag" style="color:#e67e22;">Publication &middot; Stellar evolution</span>
      <h3>White dwarfs with AstroSat/UVIT and Gaia</h3>
      <p class="teaser">Discovery of new Galactic white dwarfs towards the SMC from UV and optical photometry.</p>
      <span class="more" style="color:#e67e22;"><span class="more-label"></span></span>
    </div>
  </summary>
  <div class="rbody">
    <p><i>Project Fellow, CHRIST University, Bangalore, India.</i> Paper: <a href="https://doi.org/10.1051/0004-6361/202450292">Detection of a new sample of Galactic white dwarfs in the direction of the Small Magellanic Cloud</a> (A&amp;A 690, A68).</p>
    <p>This project demonstrated the power of combining the <b>Ultraviolet Imaging Telescope (UVIT)</b> and <b>Gaia DR3</b> for large-scale white dwarf discovery. We identified <b>43 single white dwarfs</b> (37 of them new) and derived their masses, effective temperatures and cooling ages using white dwarf evolutionary models. The study also reported new extremely low-mass white dwarf candidates and estimated the local white dwarf space density.</p>
    <p class="rtools"><b>Key techniques:</b> Multi-wavelength photometry (UVIT, Gaia) • spectral energy distribution fitting • stellar evolutionary models • Python</p>
  </div>
</details>

<details class="rcard">
  <summary>
    <img src="/assets/img/research/be_halpha_profiles.jpg" alt="Multi-epoch H-alpha line profiles of classical Be stars from LAMOST">
    <div class="rhead">
      <span class="rtag" style="color:#27ae60;">Master's thesis &middot; Stellar disks</span>
      <h3>Disk evolution in classical Be stars</h3>
      <p class="teaser">Line-profile variability in multi-epoch LAMOST spectra of classical Be stars.</p>
      <span class="more" style="color:#27ae60;"><span class="more-label"></span></span>
    </div>
  </summary>
  <div class="rbody">
    <p><i>M.Sc. thesis, CHRIST University, Bangalore, India; advisor Dr Blesson Mathew.</i> <i>Study of disk evolution in classical Be stars using LAMOST medium-resolution spectra.</i></p>
    <p>This thesis used medium-resolution (R ≈ 7500) LAMOST DR7 spectra to study disk evolution in classical Be stars. From multi-epoch data, I identified <b>10 stars</b> with line-profile variability and <b>15</b> with variable Hα emission strength. Light-curve analyses gave variability periods, providing insight into disk formation and the possible role of binarity in the “Be phenomenon”.</p>
    <p class="rtools"><b>Key techniques:</b> LAMOST spectroscopy • time-series and periodogram analysis • disk variability • Python</p>
  </div>
</details>

</div>
