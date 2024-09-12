[33m64c7df7[m[33m ([m[1;36mHEAD -> [m[1;32mmain[m[33m, [m[1;31morigin/main[m[33m, [m[1;31morigin/HEAD[m[33m)[m feat(image-list): implement multiple ImageList variants with item bars in differenet position. - added various ImageList variants including standard,masonry,quilted, and woven. - different column and rows. implemented ImageListItemBar in direrent positions
[33m8b9ddd0[m feat(stack): add MUI Stack component with various configurations like, basic Stack component,directions,and responsive values
[33mb8b0ef5[m style(grid): implement responsive grid layout with spacing and flex-grow - add a responsive grid using MUI Grid component - apply column spacing and margin using sx prop
[33ma1bc416[m feat(css): implemented MUI CssBaseline component for reset css
[33ma05332b[m feat(grid): add MUI Grid component with multiple breakpoints and spacing,columnSpacing,rowSpacing
[33m9e144af[m feat(ui): add Container component with responsive and fixed width container
[33ma4a35d1[m feat(ui): add Box component with dashed border styleing
[33mca96dae[m feat(pagination): implememted MUI Pagination with various configuration. - added basic Pagination. - implement pagination color via color props. - implement Pagination variant e.g. text,outlined. - implement Pagination shape e.g. circualr(default),rounded. - Pagination size (small,medium,large). - implemented various paginatin button e.g. showFirstButton,showLastButton,hideNextButton,hidePrevButton
[33m3f653a2[m feat(link): added MUI Link component with various configurations
[33m978ef10[m feat(breadcrumbs): implement MUI Breadcrumbs with various configurations. - added basic Breadcrumbs with Link,Typography. - implemented Breadcrumbs with icon. - implemented maxItems prop for collapsed Breadcrumbs
[33mb9fdffd[m feat(component): implemented MUI Paper component with various configuratins. - added Paper default component. - implemented various elevation values e.g. 0,1,2,3,4,6,8,10,12,14,16,24 - implemented two variants elevation and outlined. - implemented squre props false,and square for corner square, and ractengale
[33m6cbc9b0[m feat(component): added MUI Card component with outlined variant,Typography,CardActions,Button and CardContent
[33m4c59693[m feat(ui) add Appbar with menu items and login button. - implemented a AppBar with Toolbar Component. - Added a MenuList with some items (Home,Service,Project,Team Member, and Contact Us). - implemented a Login Button with outlined variant and inherit color
[33m03679fe[m feat(component): add Accordion component with various configuratons. - implemented Accordion component with expand icons. - added multiple Accordion items.
[33m924cebd[m feat(component): add Skeleton component with various variants,animations and custom backgroun color - implemented basic MUI Skeleton component with text,circular,rectangular,and rounded variants. - added different animations e.g. pulse,animation=false,and wave. - added custom violet background color with Skeleton
[33m9a03c74[m feat(component): add MUI Circular and Linear Progress examples with various colors - implemented basic Circular nad Lenear Progress. - added CircularProgress with different colors such a : success,info,primary,error,warning, and inherit. - include LinearProgress with multiple color variations same as CircularProgress colors. - applied custom css by sx props
[33m4973f17[m feat(component): add Alert Component with severity,variants, and custom colors - implemented basic Alert component with success message - Added MUI Alert severity including: success,error,info, and warning. - create custom icon with Alert. - include filled and outlined variant.
[33m8eb510c[m feat(toggle button): implemented MUI ToggleButton e.g. Single select and multiple select value
[33m6cdf71f[m feat(tooltip): added MUI basic tooltip and various configurations - implemented Tooltip disabled - Tooltip Button,size,color
[33m76cf63f[m feat(chip): added MUI various Chip configurations - implemented MUI Chip with color,size,clickable Chip,deleteable, and avatar chip
[33m56a4977[m feat(badge): implement MUI Badge component with various configurations - added a basic MUI Badge with default styling. - configured Badge with different colors (success,error). - implemented Badge with maximum count using max prop. - applied margin top and bottom spacing, and margin left spacing some Badge components
[33m8a265c2[m feat(avatar): implemented MUI Avatar component with various configurations - Added a basic MUI Avatar component. - Include an Avatar with image. - Include an Avatar with text and icon - using custom background deeppink color in Avatar. - implemented different variants including (circuler,square, and rounded)
[33m963897e[m feat(divider): implemented MUI Divider component with various variants - Added a basic Divider with top maargin spacing. - implemented different Divider variant including (inset,middle, and fullWidth) - applied consistent top margin (mt:4) to all Divider
[33md11b534[m feat(typography): implement MUI various Typography configurations - Added Typography elements for different heading (h1,h2,h3,h4,h5,and h6,subtitle1,subtitle2). - Added p text using body1,body2 and default variant. - Applied different colos including:primary,error,inherit, and secondary. - Applied fontSize,fontFamily and fontWeight(bold,bolder).
[33m2fa4f5d[m feat(select): Added MUI Select component
[33me28f1b3[m feat(radio group): Added MUI RadioGroup basic component - implemented MUI RadioGroup various configurations - diferent diferent color e.g. error,success,warning,secondary - various size of MUI e.g. small,medium, and large. - required,direction and labelPlacement
[33md6dcabd[m feat(checkbox): Added MUI basic Checkbox - implemented MUI Checkbox different defferent configurations. inluding: - varius size e.g. 'small','medium','large' - various color e.g. error,warning,success,primary. - implemented Checkbox disabled,required,defaultChecked, and icon checkbox
[33m8622a6e[m add switch component
[33mbd456b3[m feat(fab): implemented MUI Fab - add basic MUI  Fab with add-icon - implemented MUI Fab various color,size,and variant
[33mae95e64[m feat(button-group): implemented variaous MUI ButtonGroup - Added a basic MUI ButtonGroup with Add,Edit and Delete button. - Implemented MUI ButtonGroup different colors button - Implemented MUI ButtonGroup different size,orientation,disabled and icon button
[33m91548d8[m TextFeild * size * color * placeholder * variants * disabled * required * multiline
[33mafaf32e[m Button * size * variant * color * icon button * icon with text button
[33m60d3475[m Divider
[33m25e495d[m Typography * variant * color
[33mf9e654a[m Tooltip * size * color * disabled * title * placement
[33mebf46c8[m Chip * label * size * color * icon chip * avatar chip * clickable chip * clickable link chip * deleteable chip * variant
[33m09c670f[m Badge * badgeContent * color * max * variant
[33meeb3607[m Avatar * letter * size * stack * direction * spacing * folder icon * variant * AvatarGroup * max * total
[33mc877ca2[m Toggle Button * multi select
[33mafba533[m Toogle Button * size * color
[33mbbe7fa3[m TextField * color * size * number * search * password * helperText * multiline * rows * maxRows * placeholder * variant * margin * variant * required * defaultValue * validation * label
[33m5f305d7[m Switch * size * color * required * defaultChecked
[33m66f5735[m RadioGroup * basic radio group * row * size * color * labelPlacement
[33m653fdea[m FAB * basic fab * size * color * variant=extended
[33mf89395e[m Checkbox * basic checkbox * required * disabled * color * size * defaultChecked * icon
[33me0c5505[m ButtonGroup * size * color * orientation * disabled * variant
[33m5193063[m button with icon icon button disabled
[33m30c2a5b[m button with icon
[33me5595c9[m Button Size
[33mad7dbaf[m practice Button tag * variant * color
[33mbca2822[m ToggleButton * color * size * exclusive selection * multi selection * enforce selection
[33mb7aaa34[m Floating Action Button * <Fab> * icon * color * aria-label * size
[33md4d8477[m Switch * color * size * control by state
[33m41fe009[m  <ButtonGroup>  * <Button>  * color  * variant  * size  * disabled  * disableElevation
[33mc8156f2[m update navbar
[33m50e46a1[m create AppBar
[33mab4b1ee[m radio button * <RadioGroup> * labelPlacement * color * size * row * disabled
[33mc1c70e8[m student registration form
[33mab0585d[m create login page by material ui
[33m3c904e1[m Select * label * size * fullWidth * color
[33mf51c1dd[m Checkbox * required * size * color * label * control * disabled * defaultChecked * <Checkbox/> * <FormControlLabel></FormControlLabel> * <FormGroup></FormGroup>
[33mb4fd4b7[m form
[33mb7cfc21[m TextField * variant:standard,outlined,filled * color:primary,info,inherit,error,warning,success * size:small,medium,large * fullWidth * required * label * focused * margin:none,dense,normal * type:text,password,number * placeholder * helperText * disabled * sx:for custom css
[33mbeb44a9[m Button * variant:text,contained,outlined * color:primary,info,success,inherit,error,warning * size:small,medium,large * href * icon
[33mc51ec1b[m Typography * variant:body1,body2
[33m58dd2ce[m Typography * variant:h1,h2,h3,h4,h5,h6,subtitle1,subtitle2 * custom css use sx{{}} * component:for change the semetic element
[33m7067f93[m initialize project setup done
