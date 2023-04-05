import { Component } from '@angular/core';
import { VideouploadService } from '../Service/video upload/videoupload.service';
import { Router, ActivatedRoute } from '@angular/router';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-video-upload-content',
  templateUrl: './video-upload-content.component.html',
  styleUrls: ['./video-upload-content.component.css'],
})
export class VideoUploadContentComponent {
  selectedFile: any = ImageSnippet;
  dateCheck: any;
  today = new Date();
  effeDate: any;
  validDate: any;
  status: any;
  items = ['Main Master'];
  itemss = ['User Management'];
  items1 = ['Society Management'];
  expandedIndex = 0;
  LocalName: any = localStorage.getItem('name');
  LocalId: any = localStorage.getItem('id');
  postPromo: any;
  contentTitleName: any;
  postId: any;
  fileType: any;
  videoLink: any;
  description: any;

  constructor(
    private ImagePromotionService: VideouploadService,
    private route: Router,
    private ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ActivatedRoute.queryParams.subscribe((param: any) => {
      this.postId = param.courseId;
      console.log('OTP page ' + this.postId);
    });
  }

  addpromotion() {
    // let postCategoryId = (<HTMLInputElement>document.getElementById('postCategoryId')).value;
    let contentTitleName = (<HTMLInputElement>(
      document.getElementById('contentTitleName')
    )).value;
    let fileType = (<HTMLInputElement>document.getElementById('fileType'))
      .value;
    let videoLink = (<HTMLInputElement>document.getElementById('videoLink'))
      .value;
    let description = (<HTMLInputElement>document.getElementById('description'))
      .value;
    // let createdBy = (<HTMLInputElement>document.getElementById('createdBy')).value;

    let input = new FormData();

    input.append('postCategoryId', this.postId);
    input.append('contentTitleName', contentTitleName);
    input.append('fileType', fileType);
    input.append('videoLink', videoLink);
    input.append('description', description);
    input.append('createdBy', this.LocalName);

    input.append('bannerImage', this.selectedFile);
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.selectedFile.pending = true;
      const formData = new FormData();

      formData.append('postCategoryId', this.postId);
      formData.append('contentTitleName', this.contentTitleName);
      formData.append('fileType', this.fileType);
      formData.append('videoLink', this.videoLink);
      formData.append('description', this.description);
      formData.append('videoFile', this.selectedFile.file);
      formData.append('createdBy', this.LocalName);

      this.ImagePromotionService.uploadImage(formData).subscribe((res: any) => {
        this.postPromo = res.response;
        if (res.flag === 1) {
        }
      });
    });

    reader.readAsDataURL(file);
  }

  //
}
