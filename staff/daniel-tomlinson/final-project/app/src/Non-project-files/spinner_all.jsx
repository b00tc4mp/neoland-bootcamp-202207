import "./spinners.css";

function spinners() {
  return (
    <div>
      <a href="http://cfoucht.com/loadlab" target="_blank">
        www.cfoucht.com/loadlab
      </a>

      <div class="flexbox">
        {/*
  <!--  NO BORDER SPINNER  -->
  */}
        <div>
          <div class="nb-spinner"></div>
        </div>
        {/*
  <!--  BORDER TOP SPINNER  -->
  */}
        <div>
          <div class="bt-spinner"></div>
        </div>
        {/*
  <!--  DOUBLE BORDER SPINNER  -->
  */}
        <div>
          <div class="db-spinner"></div>
        </div>
        {/*
  <!--  DOUBLE SPINNERS  -->
  */}
        <div>
          <div class="dbl-spinner"></div>
          <div class="dbl-spinner dbl-spinner--2"></div>
        </div>
        {/*
  <!--  SRHINKING SPINNER
<div>
<div class="sh-spinner">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
</div> -->
  */}{" "}
        {/*
  <!-- REVERSE SPINNER -->
  */}
        <div>
          <div class="reverse-spinner"></div>
        </div>
        <div>
          <div class="hm-spinner"></div>
        </div>
        {/*
  <!-- TRIPLE SPINNER -->
  */}
        <div>
          <div class="triple-spinner"></div>
        </div>
        {/*
  <!--  CM spinner  -->
  */}
        <div>
          <div class="cm-spinner"></div>
        </div>
        {/*
  <!-- MUTLI SPINNER -->
  */}
        <div>
          <div class="multi-spinner-container">
            <div class="multi-spinner">
              <div class="multi-spinner">
                <div class="multi-spinner">
                  <div class="multi-spinner">
                    <div class="multi-spinner">
                      <div class="multi-spinner"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*
  <!--  3 DOT LOADER  -->
  */}
        <div>
          <div class="dot-loader"></div>
          <div class="dot-loader dot-loader--2"></div>
          <div class="dot-loader dot-loader--3"></div>
        </div>
        {/*
  <!-- FULL CIRCLE LOADER  -->
  */}
        <div>
          <div class="circle-loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        {/*
  <!-- SPINNER 13   -->
  */}
        <div>
          <div class="ml-loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        {/*
  <!--  MESH LOADER  -->
  */}
        <div>
          <div class="mesh-loader">
            <div class="set-one">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
            <div class="set-two">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </div>
        </div>
        {/*
  <!-- HEART LOADER   -->
  */}
        <div>
          <div class="heart-loader"></div>
        </div>
        {/*
  <!-- <div>
<div class="pacman"></div>
</div> -->
  */}{" "}
        {/*
  <!--  TRIFORCE LOADER  -->
  */}
        <div>
          <div class="triforce-container">
            <div class="triforce"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default spinners;
