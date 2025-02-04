import SingleMember from "../../pages/Team/SingleMember";
import { styled } from "styled-components";
import { IoLogoLinkedin } from "react-icons/io5";
export default function TeamViewer(props) {
  console.log(props.modalData);
  return (
    <div
      class="modal fade"
      id="teamModal"
      tabindex="-1"
      aria-labelledby="teamModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg m-75">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title h3 font-weight-bold" id="exampleModalLabel">
              {props.modalData.teamName}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body d-flex flex-wrap align-items-center justify-content-center">
            {props.modalData.team?.map((member, index) => {
              return (
                // <SingleMember
                //   designation={member.designation}
                //   name={member.name}
                //   image={member.image}
                //   index={index}
                // />
                <Card>
                  <CardInner>
                    <HeroImage>
                      <Image
                        src={
                          member.image
                            ? member.image
                            : "https://i.imgur.com/VfzpNHY.png"
                        }
                        alt="member"
                      />
                    </HeroImage>
                    <H>{member.name}</H>
                    <D>{member.designation}</D>
                  </CardInner>
                  <LinkedIn>
                    <IoLogoLinkedin
                      style={{ fontSize: "30px", color: "#123456" }}
                    />
                  </LinkedIn>
                </Card>
              );
            })}
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  );
}

const Card = styled.div`
  width: 180px;
  height: 200px;
  position: relative;
  border-radius: 50px 10px 50px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #123456;
  margin: 1rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
`;
const CardInner = styled.div`
  width: 178px;
  height: 198px;
  margin: auto;
  background-color: #fdfdfd;
  border-radius: 50px 10px 50px 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LinkedIn = styled.a`
  width: 32px;
  height: 32px;
  background-color: #fdfdfd;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1px;
  cursor: pointer;
`;
const HeroImage = styled.div`
  width: 100px;
  height: 100px;
  background-color: #123456;
  border-radius: 50%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
`;
const H = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin-top: 10px;
  color: #123456;
`;
const D = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  margin-top: 1px;
  color: #456789;
  text-align: center;
`;
